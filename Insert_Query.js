// inserting users to db
db.users.insertMany(
  [
  {
    "userid": 1,
    "name": "dinesh",
    "email": "dinesh@gmail.com",
    "mentorid": 1
  },
  {
    "userid": 2,
    "name": "balaji",
    "email": "balaji@gmail.com",
    "mentorid": 2
  },
  {
    "userid": 3,
    "name": "arun",
    "email": "arun@gmail.com",
    "mentorid": 3
  },
  {
    "userid": 4,
    "name": "vijay",
    "email": "vijay@gmail.com",
    "mentorid": 1
  },
  {
    "userid": 5,
    "name": "siva",
    "email": "siva@gmail.com",
    "mentorid": 2
  }
])



//mentors
db.mentors.insertMany(
[  
    {
      "mentorid": 1,
      mentorname: "vasanth",
      mentor_email: "vasanth@gmail.com"
    },
    {
      "mentorid": 2,
      mentorname: "thiru",
      mentor_email: "thiru@gmail.com"
    },
    {
      "mentorid": 3,
      mentorname: "arunprakash",
      mentor_email: "arunprakash@gmail.com"
    },
    {
      "mentorid": 4,
      mentorname: "deepika",
      mentor_email: "deepika@gmail.com"
    },
    {
      "mentorid": 5,
      mentorname: "bala",
      mentor_email: "bala@gmail.com"
    }
  ])

//attendnace
  db.attendnace.insertMany(
    [
        {
          "userid": 1,
          topicid: 1,
          attended: true
        },
        {
          "userid": 2,
          topicid: 2,
          attended: true
        },
        {
          "userid": 3,
          topicid: 3,
          attended: false
        },
        {
          "userid": 4,
          topicid: 4,
          attended: false
        },
        {
          "userid": 5,
          topicid: 5,
          attended: false
        }
      ]
  )

//codekata
db.codekata.insertMany(
[
  {
    "userid": 1,
    problems: 20
  },
  {
    "userid": 2,
    problems: 30
  },
  {
    "userid": 3,
    problems: 25
  },
  {
    "userid": 4,
    problems: 70
  },
  {
    "userid": 5,
    problems: 100
  }
])


//company_drives
db.company_drives.insertMany(
[  
  {
    "userid": 1,
    drive_date: ISODate("2020-10-09T18:30:00.000Z"),
    company: "Guvi"
  },
  {
    "userid": 1,
    drive_date: ISODate("2020-10-14T18:30:00.000Z"),
    company: "zoho"
  },
  {
    "userid": 2,
    drive_date: ISODate("2020-10-19T18:30:00.000Z"),
    company: "each one teach one"
  },
  {
    "userid": 3,
    drive_date: ISODate("2020-10-24T18:30:00.000Z"),
    company: "Mac App studio"
  },
  {
    "userid": 4,
    drive_date: ISODate("2020-10-26T18:30:00.000Z"),
    company: "tcs"
  }
])



//topics
db.topics.insertMany(
[  
  {
    topicid: 1,
    topic: "html",
    topic_date: ISODate("2020-10-03T18:30:00.000Z")
  },
  {
    topicid: 2,
    topic: "css",
    topic_date: ISODate("2020-10-09T18:30:00.000Z")
  },
  {
    topicid: 3,
    topic: "Javascript",
    topic_date: ISODate("2020-10-14T18:30:00.000Z")
  },
  {
    topicid: 4,
    topic: "React",
    topic_date: ISODate("2020-10-19T18:30:00.000Z")
  },
  {
    topicid: 5,
    topic: "NodeJs",
    topic_date: ISODate("2020-10-24T18:30:00.000Z")
  }
])


//task
db.tasks.insertMany(
[  
  {
    taskid: 1,
    topicid: 1,
    "userid": 1,
    task: "html task",
    due_date: ISODate("2020-10-03T18:30:00.000Z"),
    submit: true
  },
  {
    taskid: 2,
    topicid: 2,
    "userid": 2,
    task: "css task",
    due_date: ISODate("2020-10-09T18:30:00.000Z"),
    submit: true
  },
  {
    taskid: 3,
    topicid: 3,
    "userid": 3,
    task: "Javascript task",
    due_date: ISODate("2020-10-14T18:30:00.000Z"),
    submit: false
  },
  {
    taskid: 4,
    topicid: 4,
    "userid": 4,
    task: "React task",
    due_date: ISODate("2020-10-19T18:30:00.000Z"),
    submit: false
  },
  {
    taskid: 5,
    topicid: 5,
    "userid": 5,
    task: "Node task",
    due_date: ISODate("2020-10-24T18:30:00.000Z"),
    submit: false
  }
])