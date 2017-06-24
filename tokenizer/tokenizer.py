import glob
import json
import re

# tokenization configuration
sentenceStop = re.compile(r'([.|?|!|\n])')
removeChars = re.compile(r'["|\'|,|.|\n]')

# these get filled
startWords = []
words = {}

for filename in glob.glob('mopo/*'):
	with open(filename, 'r') as file:
		d = file.read()

		# split up sentences
		sentences = sentenceStop.split(d)

		# replace useless characters by spaces
		sentences = [removeChars.sub(' ', s) for s in sentences]

		# split sentences into words
		sentences = [list(map(str.lower, map(str.strip, s.split(' ')))) for s in sentences]

		pred = None
		for sentence in sentences:
			# filter out empty words
			sentence = [s for s in sentence if s.strip() != ""]

			# do nothing if the sentence is now empty
			if len(sentence) < 1:
				continue

			# eventually save the start word
			if sentence[0] not in startWords:
				startWords.append(sentence[0])

			for word in sentence:
				if pred:
					if word in words[pred]:
						words[pred][word] += 1
					else:
						words[pred][word] = 1

				if word not in words:
					words[word] = {}

				pred = word

print(json.dumps({
	"startWords": startWords,
	"words": words
}))