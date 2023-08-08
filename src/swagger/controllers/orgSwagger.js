/**
 * @swagger
 * /organization/signup:
 *   post:
 *     summary: Create a new organization account
 *     description: Create a new organization account with provided information.
 *     tags: [Organization]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the organization.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the organization.
 *               password:
 *                 type: string
 *                 description: The password for the organization account.
 *               confirmPassword:
 *                 type: string
 *                 description: Confirm the password for the organization account.
 *               description:
 *                 type: string
 *                 description: A description of the organization.
 *               phoneNumber:
 *                 type: string
 *                 description: The phone number of the organization.
 *               image:
 *                 type: string
 *                 description: URL of the organization's image.
 *             example:
 *               name: Example Org
 *               email: example@example.com
 *               password: example_password
 *               confirmPassword: example_password
 *               description: Example organization description
 *               phoneNumber: +1234567890
 *               image: http://example.com/org_image.jpg
 *     responses:
 *       200:
 *         description: Organization account created successfully. Returns a success message in the response body.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                 message: Organization account created successfully
 *       400:
 *         description: Invalid input or email already in use. Returns an error message in the response body.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *               example:
 *                 error: Invalid input data
 *       500:
 *         description: Internal server error. Returns an error message in the response body.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *               example:
 *                 error: Internal Server Error
 */



/**
 * @swagger
 * /organization/signin:
 *   post:
 *     summary: Sign in to the organization
 *     tags:
 *       - Organization
 *     requestBody:
 *       description: Signin credentials
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               emailOrUsername:
 *                 type: string
 *               password:
 *                 type: string
 *               rememberMe:
 *                 type: boolean
 *             required:
 *               - emailOrUsername
 *               - password
 *     responses:
 *       '200':
 *         description: Successful signin
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               description: JWT token
 *       '400':
 *         description: Invalid username or password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */



/**
 * @swagger
 * /organization/updateAccount:
 *   put:
 *     summary: Update organization account
 *     description: Update the organization account information for the authenticated organization.
 *     tags: [Organization]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The updated name of the organization.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The updated email address of the organization.
 *               description:
 *                 type: string
 *                 description: The updated description of the organization.
 *               image:
 *                 type: string
 *                 description: The updated URL of the organization's image.
 *               phone_number:
 *                 type: string
 *                 description: The updated phone number of the organization.
 *             example:
 *               name: Updated Org Name
 *               email: updated@example.com
 *               description: Updated organization description
 *               image: http://example.com/updated_image.jpg
 *               phone_number: +1234567890
 *     responses:
 *       200:
 *         description: Organization account updated successfully. Returns a success message in the response body.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                 message: Organization account updated successfully
 *       400:
 *         description: Invalid input. Returns an error message in the response body.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *               example:
 *                 error: Invalid input data
 *       404:
 *         description: Organization not found. Returns an error message in the response body.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                 message: Organization not found
 *       500:
 *         description: Internal server error. Returns an error message in the response body.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *               example:
 *                 error: Internal Server Error
 *
 * securitySchemes:
 *   cookieAuth:
 *     type: apiKey
 *     in: cookie
 *     name: jwt
 */



/**
 * @swagger
 * /organization:
 *   delete:
 *     summary: Delete organization account
 *     description: Delete the organization account for the authenticated organization.
 *     tags: [Organization]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Organization account deleted successfully. Returns a success message in the response body.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                 message: Organization account deleted successfully
 *       401:
 *         description: Unauthorized. Returns an error message in the response body.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *               example:
 *                 error: Unauthorized
 *       404:
 *         description: Organization not found. Returns an error message in the response body.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *               example:
 *                 error: Organization not found
 *       500:
 *         description: Internal server error. Returns an error message in the response body.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *               example:
 *                 error: Internal Server Error
 *
 * securitySchemes:
 *   cookieAuth:
 *     type: apiKey
 *     in: cookie
 *     name: jwt
 */



/**
 * @swagger
 * /organization/{organizationId}:
 *   get:
 *     summary: Get organization by ID
 *     description: Get organization details by its ID.
 *     tags: [Organization]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: organizationId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the organization to retrieve.
 *     responses:
 *       200:
 *         description: Returns the details of the specified organization.
 *         schema:
 *           $ref: "#/components/schemas/Organization"
 *       401:
 *         description: Unauthorized. Returns an error message in the response body.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: Unauthorized
 *       404:
 *         description: Organization not found. Returns an error message in the response body.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: Organization not found
 *       500:
 *         description: Internal server error. Returns an error message in the response body.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: Internal Server Error
 *
 * securitySchemes:
 *   cookieAuth:
 *     type: apiKey
 *     in: cookie
 *     name: jwt
 */




/**
 * @swagger
 * /organization/signOut:
 *   post:
 *     summary: Sign out from the organization account
 *     tags: [Organization]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       302:
 *         description: Redirects to the API documentation page after signing out
 *       400:
 *         description: Bad request or error while signing out
 * securitySchemes:
 *   cookieAuth:
 *     type: apiKey
 *     in: cookie
 *     name: jwt
 */



/**
 * @swagger
 * tags:
 *   name: Event
 *   description: Event creation and management APIs
 */

/**
 * @swagger
 * /organization/createEvent:
 *   post:
 *     summary: Create a new event
 *     tags: [Event]
 *     security:
 *       - jwt: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               location:
 *                 type: string
 *               category:
 *                 type: string
 *               start_date:
 *                 type: string
 *                 format: date-time
 *               end_date:
 *                 type: string
 *                 format: date-time
 *               image:
 *                 type: string
 *     responses:
 *       200:
 *         description: Event created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 event:
 *                   type: object
 *       400:
 *         description: Bad request or missing fields
 *       404:
 *         description: Organization not found
 *       500:
 *         description: Error while creating the event
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */



/**
 * @swagger
 * tags:
 *   name: Event
 *   description: Event creation and management APIs
 */

/**
 * @swagger
 * /events/{eventId}:
 *   put:
 *     summary: Update an event
 *     tags: [Event]
 *    security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: eventId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the event to be updated
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               location:
 *                 type: string
 *               category:
 *                 type: string
 *               start_date:
 *                 type: string
 *                 format: date-time
 *               end_date:
 *                 type: string
 *                 format: date-time
 *               image:
 *                 type: string
 *     responses:
 *       200:
 *         description: Event updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 event:
 *                   type: object
 *       400:
 *         description: Bad request or missing fields
 *       404:
 *         description: Event not found or organization not authorized
 *       500:
 *         description: Error while updating the event
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 * securitySchemes:
 *   cookieAuth:
 *     type: apiKey
 *     in: cookie
 *     name: jwt
 */



/**
 * @swagger
 * tags:
 *   name: Event
 *   description: Event creation and management APIs
 */

/**
 * @swagger
 * /event/{eventId}:
 *   put:
 *     summary: Update an event
 *     tags: [Event]
 *     security:
 *       - jwt: []
 *     parameters:
 *       - in: path
 *         name: eventId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the event to be updated
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               location:
 *                 type: string
 *               category:
 *                 type: string
 *               start_date:
 *                 type: string
 *                 format: date-time
 *               end_date:
 *                 type: string
 *                 format: date-time
 *               image:
 *                 type: string
 *     responses:
 *       200:
 *         description: Event updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 event:
 *                   type: object
 *       400:
 *         description: Bad request or missing fields
 *       404:
 *         description: Event not found or organization not authorized
 *       500:
 *         description: Error while updating the event
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /organization/{organizationId}/event:
 *   get:
 *     summary: Get events created by an organization
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: organizationId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the organization
 *     responses:
 *       200:
 *         description: List of events created by the organization
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Event'
 *       404:
 *         description: Organization not found
 *       500:
 *         description: Error while getting events
 */