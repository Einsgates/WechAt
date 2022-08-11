# generate a multi-to-multi relashionship between two tables using Python

import random

# we create a CSV file with the data we want to insert
with open('msg.csv', 'w') as f:
    pair_dict = {}
    pair_list = []
    # post id from 1 to 500
    for i in range(1, 501):
        # randomly pair i to a number j between 1 and 1000
        j = random.randint(1, 1000)
        pair_dict[i] = j
        pair = str(i) + ',' + str(j) + '\n'
        # write the data to the CSV file
        pair_list.append(pair)

    # write the list to the CSV file
    # write the head line
    f.write('Snippet_id, Msg_id\n')
    f.writelines(pair_list)

with open('post.csv', 'w') as f:
    pair_dict = {}
    pair_list = []
    # number if from 1 to 1145
    for i in range(1, 1046):
        # randomly pair i to a number j between 0 and 99
        j = random.randint(0, 100)
        pair_dict[i] = j
        pair = str(i) + ',' + str(j) + '\n'
        # write the data to the CSV file
        pair_list.append(pair)

    # write the list to the CSV file
    # write the head line
    f.write('Snippet_id, Post_id\n')
    f.writelines(pair_list)

