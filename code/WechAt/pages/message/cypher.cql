db.courses.aggregate([
  {
    $match: {
      course_number: {
        $gte: 200,
        $lte: 400
      }
    }
  },
  {
    $lookup: {
      from: "reviews",
      localField: "reviews",
      foreignField: "_id",
      as: "reviews"
    }
  },
  {
    $lookup: {
      from: "students",
      localField: "students",
      foreignField: "_id",
      as: "students"
    }
  },
  {
    $lookup: {
      from: "instructors",
      localField: "instructors",
      foreignField: "_id",
      as: "instructors"
    }
  },
  {
    $unwind: "$instructors"
  },
  {
    $unwind: "$students"
  },
  {
    $unwind: "$reviews"
  },
  {
    $project: {
      instructor_id: "$instructors._id",
      instructor_name: "$instructors.instructor_name",
      students_id: "$students._id",
      students_name: "$students.student_name",
      department: "$department",
      year_offered: "$year_offered",
      review_id: "$reviews._id"
    }
  },
  {
    $group: {
      _id: "$_id",
      instructor_id: {
        $first: "$instructor_id"
      },
      instructor_name: {
        $first: "$instructor_name"
      },
      students_id: {
        $addToSet: "$students_id"
      },
      students_name: {
        $addToSet: "$students_name"
      },
      department: {
        $addToSet: "$department"
      },
      year_offered: {
        $addToSet: "$year_offered"
      },
      review_id: {
        $addToSet: "$review_id"
      }
    }
  },
  {
    $project: {
      instructor_id: "$instructor_id",
      instructor_name: "$instructor_name",
      num_of_students: {
        $size: "$students_id"
      },
      num_of_dept: {
        $size: "$department"
      },
      year_diff: {
        $size: {
          $setDifference: [
            {
              $map: {
                input: "$year_offered",
                in: {
                  $subtract: [
                    {
                      $max: "$year_offered"
                    },
                    {
                      $min: "$year_offered"
                    }
                  ]
                }
              }
            },
            [0]
          ]
        }
      }
    }
  },
  {
    $sort: {
      num_of_students: -1,
      instructor_id: 1
    }
  }
]);