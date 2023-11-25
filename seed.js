const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



const applicants = [
        {
            "id": "06cb010e-b8cb-48ea-acd2-75ec06cab237",
            "firstName": "FirstName1",
            "lastName": "LastName1",
            "email": "applicant1@example.com",
            "phoneNumber": 1000000000,
            "resumeLink": "https://example.com/resume1.pdf",
            "createdAt": "2023-11-25T05:48:47.440Z",
            "updatedAt": "2023-11-25T05:48:47.440Z"
        },
        {
            "id": "3154097c-b334-43e7-9bd1-2b38d2e3ac3f",
            "firstName": "FirstName11",
            "lastName": "LastName11",
            "email": "applicant11@example.com",
            "phoneNumber": 1000000010,
            "resumeLink": "https://example.com/resume11.pdf",
            "createdAt": "2023-11-25T05:48:47.440Z",
            "updatedAt": "2023-11-25T05:48:47.440Z"
        },
        {
            "id": "4477625a-2c08-4ea2-92df-a8bb969d17a5",
            "firstName": "FirstName2",
            "lastName": "LastName2",
            "email": "applicant2@example.com",
            "phoneNumber": 1000000001,
            "resumeLink": "https://example.com/resume2.pdf",
            "createdAt": "2023-11-25T05:48:47.440Z",
            "updatedAt": "2023-11-25T05:48:47.440Z"
        },
        {
            "id": "a27e6049-4661-4778-a4bb-c948a392b09c",
            "firstName": "FirstName13",
            "lastName": "LastName13",
            "email": "applicant13@example.com",
            "phoneNumber": 1000000012,
            "resumeLink": "https://example.com/resume13.pdf",
            "createdAt": "2023-11-25T05:48:47.440Z",
            "updatedAt": "2023-11-25T05:48:47.440Z"
        },
        {
            "id": "a2e6bb6e-4480-4407-a3bd-37a7c4327905",
            "firstName": "FirstName7",
            "lastName": "LastName7",
            "email": "applicant7@example.com",
            "phoneNumber": 1000000006,
            "resumeLink": "https://example.com/resume7.pdf",
            "createdAt": "2023-11-25T05:48:47.440Z",
            "updatedAt": "2023-11-25T05:48:47.440Z"
        },
        {
            "id": "a4ba9554-4c59-46d6-bda6-f67f69f0fe05",
            "firstName": "FirstName9",
            "lastName": "LastName9",
            "email": "applicant9@example.com",
            "phoneNumber": 1000000008,
            "resumeLink": "https://example.com/resume9.pdf",
            "createdAt": "2023-11-25T05:48:47.440Z",
            "updatedAt": "2023-11-25T05:48:47.440Z"
        },
        {
            "id": "c0b071ff-1dad-49eb-b235-268a4e646f3d",
            "firstName": "FirstName8",
            "lastName": "LastName8",
            "email": "applicant8@example.com",
            "phoneNumber": 1000000007,
            "resumeLink": "https://example.com/resume8.pdf",
            "createdAt": "2023-11-25T05:48:47.440Z",
            "updatedAt": "2023-11-25T05:48:47.440Z"
        },
        {
            "id": "d0d569e6-2772-4db6-a499-14e90074f7de",
            "firstName": "FirstName6",
            "lastName": "LastName6",
            "email": "applicant6@example.com",
            "phoneNumber": 1000000005,
            "resumeLink": "https://example.com/resume6.pdf",
            "createdAt": "2023-11-25T05:48:47.440Z",
            "updatedAt": "2023-11-25T05:48:47.440Z"
        },
        {
            "id": "eceb2950-3b91-4b5d-acc7-720e4db76ef1",
            "firstName": "FirstName5",
            "lastName": "LastName5",
            "email": "applicant5@example.com",
            "phoneNumber": 1000000004,
            "resumeLink": "https://example.com/resume5.pdf",
            "createdAt": "2023-11-25T05:48:47.440Z",
            "updatedAt": "2023-11-25T05:48:47.440Z"
        },
        {
            "id": "f4198ff1-f68a-4450-93f4-f9a66b95d297",
            "firstName": "FirstName3",
            "lastName": "LastName3",
            "email": "applicant3@example.com",
            "phoneNumber": 1000000002,
            "resumeLink": "https://example.com/resume3.pdf",
            "createdAt": "2023-11-25T05:48:47.440Z",
            "updatedAt": "2023-11-25T05:48:47.440Z"
        },
        {
            "id": "ff72f479-99ac-45a4-b1a6-f4d362d11264",
            "firstName": "FirstName10",
            "lastName": "LastName10",
            "email": "applicant10@example.com",
            "phoneNumber": 1000000009,
            "resumeLink": "https://example.com/resume10.pdf",
            "createdAt": "2023-11-25T05:48:47.440Z",
            "updatedAt": "2023-11-25T05:48:47.440Z"
        }
    
];




// Provided job data
const jobs = [
        {
            "id": "07ec1d61-2a0a-4a52-8861-f6e5e6bcf95d",
            "title": "Operations Supervisor",
            "description": "Operations Supervisor in the field of Manufacturing",
            "location": "City 30",
            "createdAt": "2023-11-25T05:40:06.896Z",
            "updatedAt": "2023-11-25T05:40:06.896Z",
            "jobCategoryId": "90be6a04-a75e-448b-9222-3455575f55dc"
        },
        {
            "id": "08aae9b9-4e84-4539-ae5c-949720e1799d",
            "title": "Teacher",
            "description": "Teacher in the field of Manufacturing",
            "location": "City 25",
            "createdAt": "2023-11-25T05:40:06.895Z",
            "updatedAt": "2023-11-25T05:40:06.895Z",
            "jobCategoryId": "90be6a04-a75e-448b-9222-3455575f55dc"
        },
        {
            "id": "097d49c0-1927-4546-a53c-c358de8d4253",
            "title": "Financial Analyst",
            "description": "Financial Analyst in the field of Finance",
            "location": "City 23",
            "createdAt": "2023-11-25T05:39:41.726Z",
            "updatedAt": "2023-11-25T05:39:41.726Z",
            "jobCategoryId": "3454410f-bd98-4b49-828c-bc72f964564b"
        },
        {
            "id": "0a8763fd-0851-4be7-a535-62427bdcf35c",
            "title": "Registered Nurse",
            "description": "Registered Nurse in the field of Education",
            "location": "City 4",
            "createdAt": "2023-11-25T05:39:41.725Z",
            "updatedAt": "2023-11-25T05:39:41.725Z",
            "jobCategoryId": "d2c6409c-d4a2-4dce-8a86-9ccf31e4bb60"
        },
        {
            "id": "250e2259-fed8-4b56-914d-4f1a1f417ae3",
            "title": "Insurance Agent",
            "description": "Insurance Agent in the field of Education",
            "location": "City 24",
            "createdAt": "2023-11-25T05:40:06.895Z",
            "updatedAt": "2023-11-25T05:40:06.895Z",
            "jobCategoryId": "d2c6409c-d4a2-4dce-8a86-9ccf31e4bb60"
        },
        {
            "id": "299b0d23-1ca6-4a2b-ac97-ec71e547172c",
            "title": "Systems Analyst",
            "description": "Systems Analyst in the field of Healthcare",
            "location": "City 17",
            "createdAt": "2023-11-25T05:40:06.895Z",
            "updatedAt": "2023-11-25T05:40:06.895Z",
            "jobCategoryId": "5bb2872f-0be0-46a5-bfb9-fc2097c4b8b3"
        },
        {
            "id": "2b308481-bfb1-4b81-b774-9d28af730d99",
            "title": "Registered Nurse",
            "description": "Registered Nurse in the field of Education",
            "location": "City 4",
            "createdAt": "2023-11-25T05:40:06.895Z",
            "updatedAt": "2023-11-25T05:40:06.895Z",
            "jobCategoryId": "d2c6409c-d4a2-4dce-8a86-9ccf31e4bb60"
        },
        {
            "id": "2e4f67f2-fd82-4e66-a8f4-6e30ea31b925",
            "title": "Pharmacist",
            "description": "Pharmacist in the field of Technology",
            "location": "City 21",
            "createdAt": "2023-11-25T05:40:06.895Z",
            "updatedAt": "2023-11-25T05:40:06.895Z",
            "jobCategoryId": "1a34c34b-4f34-45a6-abb9-a5d8a3cd54e7"
        },
        {
            "id": "30e0154f-8cd4-44a3-b04a-a627fbcbe32d",
            "title": "Registered Nurse",
            "description": "Registered Nurse in the field of Education",
            "location": "City 19",
            "createdAt": "2023-11-25T05:39:41.726Z",
            "updatedAt": "2023-11-25T05:39:41.726Z",
            "jobCategoryId": "d2c6409c-d4a2-4dce-8a86-9ccf31e4bb60"
        },
        {
            "id": "3368e798-7094-4379-ba48-ca3ec356298f",
            "title": "Web Developer",
            "description": "Web Developer in the field of Finance",
            "location": "City 18",
            "createdAt": "2023-11-25T05:39:41.726Z",
            "updatedAt": "2023-11-25T05:39:41.726Z",
            "jobCategoryId": "3454410f-bd98-4b49-828c-bc72f964564b"
        },
        {
            "id": "40455132-0688-4b54-af0f-591175953046",
            "title": "Physician Assistant",
            "description": "Physician Assistant in the field of Manufacturing",
            "location": "City 20",
            "createdAt": "2023-11-25T05:40:06.895Z",
            "updatedAt": "2023-11-25T05:40:06.895Z",
            "jobCategoryId": "90be6a04-a75e-448b-9222-3455575f55dc"
        },
        {
            "id": "4350df74-1f6e-4e41-8ca1-603f0090b29b",
            "title": "Librarian",
            "description": "Librarian in the field of Healthcare",
            "location": "City 12",
            "createdAt": "2023-11-25T05:39:41.725Z",
            "updatedAt": "2023-11-25T05:39:41.725Z",
            "jobCategoryId": "5bb2872f-0be0-46a5-bfb9-fc2097c4b8b3"
        },
        {
            "id": "49e8e57d-80c1-4a8a-a601-78e9ce24d268",
            "title": "Professor",
            "description": "Professor in the field of Technology",
            "location": "City 26",
            "createdAt": "2023-11-25T05:40:06.895Z",
            "updatedAt": "2023-11-25T05:40:06.895Z",
            "jobCategoryId": "1a34c34b-4f34-45a6-abb9-a5d8a3cd54e7"
        },
        {
            "id": "4b9f9483-f019-40a2-b34a-f27fd476e50c",
            "title": "Professor",
            "description": "Professor in the field of Technology",
            "location": "City 11",
            "createdAt": "2023-11-25T05:39:41.725Z",
            "updatedAt": "2023-11-25T05:39:41.725Z",
            "jobCategoryId": "1a34c34b-4f34-45a6-abb9-a5d8a3cd54e7"
        },
        {
            "id": "615ab096-d00f-4593-b8e5-0f4c351b5ef4",
            "title": "Web Developer",
            "description": "Web Developer in the field of Finance",
            "location": "City 3",
            "createdAt": "2023-11-25T05:40:06.893Z",
            "updatedAt": "2023-11-25T05:40:06.893Z",
            "jobCategoryId": "3454410f-bd98-4b49-828c-bc72f964564b"
        },
        {
            "id": "6907bb56-f7e3-411f-9d31-0b446b956420",
            "title": "Production Manager",
            "description": "Production Manager in the field of Finance",
            "location": "City 13",
            "createdAt": "2023-11-25T05:39:41.726Z",
            "updatedAt": "2023-11-25T05:39:41.726Z",
            "jobCategoryId": "3454410f-bd98-4b49-828c-bc72f964564b"
        },
        {
            "id": "6e1cf3f1-2cef-4f2e-9d63-b2768763797a",
            "title": "Librarian",
            "description": "Librarian in the field of Healthcare",
            "location": "City 27",
            "createdAt": "2023-11-25T05:40:06.895Z",
            "updatedAt": "2023-11-25T05:40:06.895Z",
            "jobCategoryId": "5bb2872f-0be0-46a5-bfb9-fc2097c4b8b3"
        },
        {
            "id": "6eea4ad0-54f7-4724-88ea-4cd988e26fbd",
            "title": "Physician Assistant",
            "description": "Physician Assistant in the field of Manufacturing",
            "location": "City 20",
            "createdAt": "2023-11-25T05:39:41.726Z",
            "updatedAt": "2023-11-25T05:39:41.726Z",
            "jobCategoryId": "90be6a04-a75e-448b-9222-3455575f55dc"
        },
        {
            "id": "77fc3cb6-ac98-4cac-8e7d-2bb4cfb2818a",
            "title": "Systems Analyst",
            "description": "Systems Analyst in the field of Healthcare",
            "location": "City 2",
            "createdAt": "2023-11-25T05:39:41.725Z",
            "updatedAt": "2023-11-25T05:39:41.725Z",
            "jobCategoryId": "5bb2872f-0be0-46a5-bfb9-fc2097c4b8b3"
        },
        {
            "id": "81cf216e-e931-4586-9cc3-101b57423cfb",
            "title": "Accountant",
            "description": "Accountant in the field of Healthcare",
            "location": "City 22",
            "createdAt": "2023-11-25T05:40:06.895Z",
            "updatedAt": "2023-11-25T05:40:06.895Z",
            "jobCategoryId": "5bb2872f-0be0-46a5-bfb9-fc2097c4b8b3"
        },
        {
            "id": "94fb7bb1-d03f-4bd6-9f4d-db5bb03bd4cd",
            "title": "Accountant",
            "description": "Accountant in the field of Healthcare",
            "location": "City 7",
            "createdAt": "2023-11-25T05:39:41.726Z",
            "updatedAt": "2023-11-25T05:39:41.726Z",
            "jobCategoryId": "5bb2872f-0be0-46a5-bfb9-fc2097c4b8b3"
        },
        {
            "id": "95dab67e-c8a5-4df4-8371-ebd72e316894",
            "title": "Quality Engineer",
            "description": "Quality Engineer in the field of Education",
            "location": "City 29",
            "createdAt": "2023-11-25T05:40:06.896Z",
            "updatedAt": "2023-11-25T05:40:06.896Z",
            "jobCategoryId": "d2c6409c-d4a2-4dce-8a86-9ccf31e4bb60"
        },
        {
            "id": "9a3b7849-5b98-4523-868b-088ab751236c",
            "title": "Physician Assistant",
            "description": "Physician Assistant in the field of Manufacturing",
            "location": "City 5",
            "createdAt": "2023-11-25T05:40:06.896Z",
            "updatedAt": "2023-11-25T05:40:06.896Z",
            "jobCategoryId": "90be6a04-a75e-448b-9222-3455575f55dc"
        },
        {
            "id": "ba45f167-3918-4f51-98a9-41baa30b5401",
            "title": "Production Manager",
            "description": "Production Manager in the field of Finance",
            "location": "City 28",
            "createdAt": "2023-11-25T05:40:06.896Z",
            "updatedAt": "2023-11-25T05:40:06.896Z",
            "jobCategoryId": "3454410f-bd98-4b49-828c-bc72f964564b"
        },
        {
            "id": "bfa1ac19-601e-4413-8f7d-2e18f9fd4304",
            "title": "Web Developer",
            "description": "Web Developer in the field of Finance",
            "location": "City 3",
            "createdAt": "2023-11-25T05:39:41.726Z",
            "updatedAt": "2023-11-25T05:39:41.726Z",
            "jobCategoryId": "3454410f-bd98-4b49-828c-bc72f964564b"
        },
        {
            "id": "c01e5176-e59b-4371-80db-5088d2b868ce",
            "title": "Web Developer",
            "description": "Web Developer in the field of Finance",
            "location": "City 18",
            "createdAt": "2023-11-25T05:40:06.895Z",
            "updatedAt": "2023-11-25T05:40:06.895Z",
            "jobCategoryId": "3454410f-bd98-4b49-828c-bc72f964564b"
        },
        {
            "id": "d2c20fc1-ceaa-4de6-8592-00394862e591",
            "title": "Registered Nurse",
            "description": "Registered Nurse in the field of Education",
            "location": "City 19",
            "createdAt": "2023-11-25T05:40:06.895Z",
            "updatedAt": "2023-11-25T05:40:06.895Z",
            "jobCategoryId": "d2c6409c-d4a2-4dce-8a86-9ccf31e4bb60"
        },
        {
            "id": "d3ce0633-d446-41e2-841c-9069688e985a",
            "title": "Software Developer",
            "description": "Software Developer in the field of Technology",
            "location": "City 1",
            "createdAt": "2023-11-25T05:40:06.892Z",
            "updatedAt": "2023-11-25T05:40:06.892Z",
            "jobCategoryId": "1a34c34b-4f34-45a6-abb9-a5d8a3cd54e7"
        },
        {
            "id": "d500d978-b9f0-481a-ac69-6a32a2c03f90",
            "title": "Financial Analyst",
            "description": "Financial Analyst in the field of Finance",
            "location": "City 23",
            "createdAt": "2023-11-25T05:40:06.895Z",
            "updatedAt": "2023-11-25T05:40:06.895Z",
            "jobCategoryId": "3454410f-bd98-4b49-828c-bc72f964564b"
        },
        {
            "id": "d69e7db3-6194-40d5-9090-f70a606d810a",
            "title": "Software Developer",
            "description": "Software Developer in the field of Technology",
            "location": "City 1",
            "createdAt": "2023-11-25T05:39:41.725Z",
            "updatedAt": "2023-11-25T05:39:41.725Z",
            "jobCategoryId": "1a34c34b-4f34-45a6-abb9-a5d8a3cd54e7"
        },
        {
            "id": "d81b77d8-d64a-403f-9794-05c75f70d869",
            "title": "Physician Assistant",
            "description": "Physician Assistant in the field of Manufacturing",
            "location": "City 5",
            "createdAt": "2023-11-25T05:39:41.725Z",
            "updatedAt": "2023-11-25T05:39:41.725Z",
            "jobCategoryId": "90be6a04-a75e-448b-9222-3455575f55dc"
        },
        {
            "id": "dde152c3-bd21-4f0d-8277-5e5b2cd50d4c",
            "title": "Insurance Agent",
            "description": "Insurance Agent in the field of Education",
            "location": "City 9",
            "createdAt": "2023-11-25T05:39:41.725Z",
            "updatedAt": "2023-11-25T05:39:41.725Z",
            "jobCategoryId": "d2c6409c-d4a2-4dce-8a86-9ccf31e4bb60"
        },
        {
            "id": "e105d16e-2988-4071-ac04-c3fa05816e24",
            "title": "Systems Analyst",
            "description": "Systems Analyst in the field of Healthcare",
            "location": "City 2",
            "createdAt": "2023-11-25T05:40:06.892Z",
            "updatedAt": "2023-11-25T05:40:06.892Z",
            "jobCategoryId": "5bb2872f-0be0-46a5-bfb9-fc2097c4b8b3"
        },
        {
            "id": "f357dd17-9e02-48ce-bad4-b9c987a34539",
            "title": "Teacher",
            "description": "Teacher in the field of Manufacturing",
            "location": "City 10",
            "createdAt": "2023-11-25T05:39:41.725Z",
            "updatedAt": "2023-11-25T05:39:41.725Z",
            "jobCategoryId": "90be6a04-a75e-448b-9222-3455575f55dc"
        },
        {
            "id": "ffab7fbe-64aa-4fc0-bc85-a22911e925fa",
            "title": "Financial Analyst",
            "description": "Financial Analyst in the field of Finance",
            "location": "City 8",
            "createdAt": "2023-11-25T05:39:41.726Z",
            "updatedAt": "2023-11-25T05:39:41.726Z",
            "jobCategoryId": "3454410f-bd98-4b49-828c-bc72f964564b"
        },
        {
            "id": "ffe49adc-fef0-434d-97d0-758151857cc9",
            "title": "Pharmacist",
            "description": "Pharmacist in the field of Technology",
            "location": "City 6",
            "createdAt": "2023-11-25T05:39:41.726Z",
            "updatedAt": "2023-11-25T05:39:41.726Z",
            "jobCategoryId": "1a34c34b-4f34-45a6-abb9-a5d8a3cd54e7"
        }
];

async function main() {
    // Create Applications
    const applications = [];
    for (const job of jobs) {
      for (let i = 0; i < 10; i++) { // 10 applications per job
        const applicantIndex = Math.floor(Math.random() * applicants.length);
        const application = await prisma.application.create({
          data: {
            jobId: job.id,
            applicantId: applicants[applicantIndex].id
          }
        });
        applications.push(application);
      }
    }
  
    console.log(`Created ${applications.length} applications.`);
  }

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
