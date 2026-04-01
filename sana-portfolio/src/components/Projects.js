import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Customer Information Management (CIM)",
      category: "web",
      description: "A React-based web application designed for managing customer subscriptions in a business environment. The platform provides a seamless user experience for creating new subscriptions, handling billing and delivery addresses, selecting product types and rates, and integrating with payment solutions. It leverages Redux for state management and Material-UI for a modern, responsive interface.",
      longDescription: "This project demonstrates expertise in building scalable, secure, and user-friendly enterprise applications. Key skills include advanced React patterns, Redux state management, permission-based UI, modular architecture, and integration with business workflows.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Redux", "Material-UI", "TypeScript", "SCSS", "CASL"],
      features: [
        "Modular tabbed account management system",
        "Redux state management with data fetching",
        "Permission-based UI rendering with CASL",
        "Dialog-based workflows for complex actions",
        "Reusable components and clean architecture"
      ],
      metrics: {
        users: "1000+ active users",
        performance: "98% uptime",
        security: "Role-based access control"
      },
      status: "Live",
      year: "2023",
      detailedInfo: {
        summary: "This project demonstrates expertise in building scalable, secure, and user-friendly enterprise applications. Key skills include advanced React patterns, Redux state management, permission-based UI, modular architecture, and integration with business workflows.",
        features: [
          {
            title: "Modular Tabbed Account Management",
            description: "The AccountView component organizes complex account data into modular tabs (Overview, Subscriptions, Payments, Delivery Addresses, Complaints), improving user experience and maintainability.",
            code: `<AppBar position="sticky" color="default" className={styles.tabs}>
  <Tabs
    value={this.state.currentStep}
    onChange={this._handleChange}
    indicatorColor="primary"
    textColor="primary"
    variant="fullWidth"
  >
    {tabs.map((tab, index) => (
      <Tab label={tab.label} key={tab.key} href="" className={styles.tabfont} />
    ))}
  </Tabs>
</AppBar>
<SwipeableViews
  index={this.state.currentStep}
  onIndexChange={this._handleChangeIndex}
  className={styles.swipeableView}
>
  {tabs.map((tab, index) => { /* ...tab content... */ })}
</SwipeableViews>`,
            skills: ["Advanced React component composition", "UI/UX design with Material-UI", "Dynamic rendering based on user permissions"]
          },
          {
            title: "Redux State Management & Data Fetching",
            description: "The project uses Redux to manage global state and dispatches actions to fetch account, billing, subscription, and payment data. This ensures data consistency and scalability.",
            code: `const mapStateToProps = (state) => ({
  loading: state.accountDetailReducer.loading,
  account: state.accountDetailReducer.account,
  paymentMethods: state.paymentReducer.paymentMethods,
  offerings: state.offeringReducer.offerings,
  billingGroup: state.billingGroupReducer.billingGroup,
  subscriptions: state.subscriptionReducer.subscriptionPlans,
  notificationToggle: state.themeReducer.HandleNotificationToggle,
  userPermissions: state.authReducer.userPermissions,
  locales: state.localesReducer.locales,
  addresses: state.deliveryAddressReducer.addresses,
});

export default redux.connect(mapStateToProps, {
  GetAccountInfo,
  SetAccountInfo,
  GetAccountPaymentInfo,
  GetOfferings,
  GetBillingData,
  GetPlans,
  handleNotificationToggle: HandleNotificationToggle,
  getSubscriptionsWithActivity,
  addHeaderTitle,
  ManageBillingGroupInfo,
  GetAllUsers,
})(NavigateWrapper(AccountView));`,
            skills: ["Redux integration", "Asynchronous data fetching", "Separation of concerns"]
          },
          {
            title: "Permission-Based UI Rendering",
            description: "The app uses the CASL library to conditionally render UI elements based on user permissions, ensuring secure and role-based access.",
            code: `<Can I="create" a="Subscriptions" ability={this.props.userPermissions}>
  <Button
    variant="contained"
    color="primary"
    onClick={this._showNewSubscriptionDialog}
    disabled={this.props.loading}
  >
    {Locales.createSubscriptionButton}
  </Button>
</Can>`,
            skills: ["Role-based access control", "Secure UI rendering"]
          },
          {
            title: "Dialog-Based Workflows for Complex Actions",
            description: "Adding new subscriptions or managing saved addresses is handled via dialogs, keeping the main UI clean and focused.",
            code: `{this.state.showNewSubscriptionDialog && (
  <NewSubscriptionDialog
    closeDialog={this._closeNewSubscriptionDialog}
    offerings={[]}
    accountInfo={account}
    billingGroup={this.props.billingGroup}
  />
)}`,
            skills: ["Dialog/modal workflow implementation", "State-driven UI updates"]
          },
          {
            title: "Reusable Components & Clean Architecture",
            description: "The project is structured with reusable components (BasicInformation, Plans, BillingPaymentTerms, etc.), promoting maintainability and scalability.",
            code: `<BasicInformation
  accountInfo={account}
  accountNumber={this.accountNumber}
  editCallback={this._getAccountInfo}
/>
<Plans
  accountNumber={this.accountNumber}
  subscriptions={this.props.subscriptions}
  accountInfo={account}
  offerings={this.props.offerings}
  billingGroup={this.props.billingGroup}
  closeDialogCallback={this._closeNewSubscriptionDialog}
  complaintCallback={this._closeComplaintDialog}
/>`,
            skills: ["Component-driven development", "Clean code architecture"]
          }
        ]
      }
    },
    {
      id: 2,
      title: "Self-Service Portal",
      category: "web",
      description: "A comprehensive full-stack web application that enables users to manage their subscriptions, personal details, payments, delivery addresses, and complaints. The frontend is developed using React, TypeScript, Redux, and Material-UI, while the backend leverages Node.js with Express.js for RESTful API routing, Passport.js for authentication (including SAML/ADFS integration), and modular controllers for business logic. The project integrates multiple third-party services for payment and user management.",
      longDescription: "This full-stack solution demonstrates expertise in scalable front-end engineering, robust backend API development, secure authentication systems, third-party integrations, custom Webpack configuration, and CI/CD deployment for multiple environments.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "Redux", "Material-UI", "Node.js", "Express.js", "Passport.js", "SAML/ADFS", "JWT", "Webpack"],
      features: [
        "Full-stack development with React and Node.js",
        "Advanced state management with Redux",
        "RESTful API design with Express.js",
        "Multi-authentication systems (JWT, SAML/ADFS, OAuth)",
        "Third-party payment integrations",
        "Modular architecture and secure coding practices"
      ],
      metrics: {
        users: "2000+ active users",
        performance: "99.5% uptime",
        deployment: "Multi-environment CI/CD"
      },
      status: "Live",
      year: "2023",
      detailedInfo: {
        summary: "The Self-Service Portal is a comprehensive full-stack application designed to empower users to manage their account information, subscriptions, delivery addresses, billing details, and credentials without direct support. The frontend is built with React and TypeScript using Redux for state management, while the backend features a robust Node.js architecture with Express.js, Passport.js authentication, and secure third-party integrations. This project demonstrates expertise in both frontend and backend development, showcasing skills in API design, authentication systems, payment integrations, and secure coding practices.",
        features: [
          {
            title: "Fetching and Filtering Subscriptions",
            description: "This function demonstrates how I fetch and filter active subscriptions for an account, showing my skills in async operations and data manipulation.",
            code: `const getAccountActiveSubscriptions = async () => {
  const subscriptionParams = {
    subsRetrieveSubscriptionCriteria: {
      ariaAccountID: null,
      ariaAccountNo: accountNo,
      returnLevelOfDetail: 'DETAIL',
      returnLevelOfHistory: 'ALL',
    },
  };

  const allSubscriptions = await props.RetrieveSubscriptionDetailed(subscriptionParams);
  let subscriptions =
    allSubscriptions.length > 0
      ? allSubscriptions
        .filter(
          e =>
            e.instStatusCodeText !== 'CANCELLED' &&
            e.instStatusCodeText !== 'TERMINATED' &&
            e.instStatusCodeText !== 'INACTIVE',
        )
        .sort((a, b) => (a.ariaPINo > b.ariaPINo ? -1 : 1))
      : [];
  return subscriptions;
};`,
            skills: ["React & TypeScript", "Async operations and data manipulation", "API Integration"]
          },
          {
            title: "Profile Form State and Validation",
            description: "This chunk shows how I dynamically build the profile form, including validation and conditional rendering for fields like email and password.",
            code: `const setAccountDetailsFromProps = () => {
  // ...existing code...
  let stateData: any = [
    {
      label: Locales.firstName,
      value: basicInfo && basicInfo.firstName ? basicInfo.firstName : '',
      type: 'text',
      name: 'firstName',
      editable: true,
      validator: validator,
      validationStr: 'required',
    },
    // ...other fields...
    {
      label: Locales.email,
      value: basicInfo && basicInfo.emailAddress ? basicInfo.emailAddress : '',
      editable: true,
      type: 'email',
      name: 'emailAddress',
      validator: validator,
      editFields: () => (
        <UpdateEmail
          value={basicInfo && basicInfo.emailAddress ? basicInfo.emailAddress : ''}
          onChange={e => onChange(e, 'basicInfo')}
          validator={validator}
          ariaVerified={ariaVerified}
          userIdVerified={userIdVerified}
        />
      ),
    },
    {
      label: Locales.password,
      value: 'password',
      editable: true,
      type: 'password',
      name: 'password',
      validator: validator,
      editFields: () => (
        <UpdatePassword
          validator={passwordValidator}
          data={updatePasswordObj}
          onChange={e => onChange(e, 'updatePasswordObj')}
        />
      ),
    },
    // ...existing code...
  ];
  // ...existing code...
};`,
            skills: ["Form validation", "Dynamic form building", "Conditional rendering"]
          },
          {
            title: "Email Verification and Update Logic",
            description: "This code demonstrates how I verify and update the user's email, integrating with both the core system and third-party services.",
            code: `const _verifyEmailAddressAria = async () => {
  const email = basicInfo.emailAddress.toLowerCase();
  let check = false;
  if (props.account?.acctRetrieveAccountDetails?.acctContactDetails?.emailAddress !== email) {
    let params = {
      acctSearchAccountCriteria: {
        emailAddress: email,
        oldEmailAddress: props.account?.acctRetrieveAccountDetails?.acctContactDetails?.emailAddress
      },
    };

    const res = await props.SearchAccounts(params);

    if (res.isExistingAccount) {
      setAriaVerified(false);
      check = false;
      check = await _checkEmailAsUserID();
    } else {
      check = true;
      setAriaVerified(true);
    }
  }
  return check;
};

const _updateEmailZephr = async () => {
  const zephrResponse = await props.zephrGetUserByEmail(
    props.account?.acctRetrieveAccountDetails?.acctContactDetails?.emailAddress,
  );
  props
    .UpdateUserEmailZephr(
      {
        new_identifiers: {
          email_address: basicInfo.emailAddress,
        },
      },
      zephrResponse.user_id,
    )
    .then(res => {
      if (res.body.status && res?.body?.status != 200) {
        props.handleToggleSnackbar({
          show: true,
          type: 'error',
          message: res.body.message,
        });
      }
    });
};`,
            skills: ["Third-party API integration", "Email verification logic", "Error handling and user feedback"]
          },
          {
            title: "Password Update with Validation",
            description: "This function shows how I handle password changes securely, with validation and user feedback.",
            code: `const updatePassword = () => {
  if (passwordValidator.current.allValid()) {
    setPwdLoader(true);
    const sessionID = getCookie('blaize_session');
    props
      .zephrUpdatePassword(updatePasswordObj.old_password, updatePasswordObj.new_password, sessionID)
      .then(response => {
        setPwdLoader(false);
        if (response.message == 'Your password has been changed successfully') {
          props.handleToggleSnackbar({
            show: true,
            message: response.message,
            type: 'success',
          });
          closeAll();
          forceUpdate(3);
        } else {
          props.handleToggleSnackbar({
            show: true,
            message: response.message,
            type: 'error',
            link: '/#',
            linkText: 'här',
          });
        }
      })
      .catch();
  } else {
    passwordValidator.current.showMessages();
  }
};`,
            skills: ["Secure password handling", "Form validation", "User experience and feedback"]
          },
          {
            title: "Redux Integration for State Management",
            description: "Connecting the component to Redux for accessing and updating global state.",
            code: `const mapStateToProps = state => ({
  locales: state?.localesReducer?.locales,
  account: state?.accountDetailReducer?.account,
  ariaAccountNo: state?.accountSearchReducer?.ariaAccountNo,
  addresses: state?.deliveryAddressReducer?.addresses,
  billingGroup: state?.billingGroupReducer?.billingGroup,
  looup_values: state?.configurationReducer?.looup_values,
});

export default connect(mapStateToProps, {
  handleToggleSnackbar,
  GetAccountInfo,
  GetDeliveryAddresses,
  RetrieveSubscriptionDetailed,
  GetBillingData,
  SetBillingAddress,
  GetAccountAddresses,
  ManageAccountInfo,
  ManageBillingGroupInfo,
  SetActiveAddresses,
  SearchAccounts,
  CheckEmailAsUserID,
  CeleraOneChangePwd,
  RetrieveSubscription,
  GetServiceMessages,
  zephrUpdatePassword,
  UpdateUserEmailZephr,
  zephrGetUserByEmail,
})(ProfileOverview);`,
            skills: ["Redux state management", "Component connection patterns", "Centralized state architecture"]
          },
          {
            title: "Backend API Design & Authentication",
            description: "Developed a robust Node.js backend with Express.js for RESTful API routing and Passport.js for multiple authentication strategies including SAML/ADFS integration.",
            code: `// Express.js API routing with authentication middleware
app.use('/api/auth', passport.authenticate('jwt', { session: false }), authRoutes);
app.use('/api/subscriptions', passport.authenticate('saml', { session: false }), subscriptionRoutes);

// SAML/ADFS authentication strategy
passport.use(new SamlStrategy({
  path: '/login/callback',
  entryPoint: process.env.SAML_ENTRY_POINT,
  issuer: process.env.SAML_ISSUER,
  cert: process.env.SAML_CERT
}, (profile, done) => {
  // User profile processing logic
  return done(null, profile);
}));

// JWT token generation and validation
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
};`,
            skills: ["API design & implementation with Express.js", "Authentication (JWT, SAML/ADFS, Google OAuth)", "Secure coding practices"]
          },
          {
            title: "Third-Party Payment Integrations",
            description: "Integrated multiple payment services with secure handling of sensitive data and comprehensive error management.",
            code: `// Adyen payment integration with error handling
const processAdyenPayment = async (paymentData) => {
  try {
    const paymentRequest = {
      amount: { currency: paymentData.currency, value: paymentData.amount },
      reference: paymentData.reference,
      paymentMethod: paymentData.paymentMethod,
      returnUrl: process.env.ADYEN_RETURN_URL,
      merchantAccount: process.env.ADYEN_MERCHANT_ACCOUNT
    };

    const response = await adyenCheckout.payments(paymentRequest);

    if (response.resultCode === 'Authorised') {
      await updateSubscriptionStatus(paymentData.subscriptionId, 'active');
      return { success: true, data: response };
    }

    return { success: false, error: response.refusalReason };
  } catch (error) {
    logger.error('Adyen payment failed:', error);
    throw new PaymentError('Payment processing failed', error);
  }
};

// FarPay integration with async/await
const initiateFarPayTransaction = async (transactionData) => {
  const farPayClient = new FarPayAPI(process.env.FARPAY_API_KEY);

  return await farPayClient.createTransaction({
    amount: transactionData.amount,
    currency: transactionData.currency,
    customer: transactionData.customer,
    callback_url: \`\${process.env.BASE_URL}/api/payments/farpay/callback\`
  });
};`,
            skills: ["Third-party payment integrations", "Asynchronous programming with Promises and async/await", "Secure handling of sensitive data"]
          },
          {
            title: "Modular Controller Architecture",
            description: "Implemented modular controllers for business logic with comprehensive input validation and error handling patterns.",
            code: `// Modular subscription controller with validation
class SubscriptionController {
  async createSubscription(req, res, next) {
    try {
      // Input validation
      const { error, value } = subscriptionSchema.validate(req.body);
      if (error) {
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: error.details
        });
      }

      // Business logic
      const subscription = await SubscriptionService.create({
        ...value,
        userId: req.user.id
      });

      // Response formatting
      res.status(201).json({
        success: true,
        data: subscription,
        message: 'Subscription created successfully'
      });
    } catch (error) {
      next(error); // Pass to error handling middleware
    }
  }

  async updateSubscription(req, res, next) {
    try {
      const subscriptionId = req.params.id;
      const updates = req.body;

      // Authorization check
      const hasPermission = await this.checkUserPermission(req.user.id, subscriptionId);
      if (!hasPermission) {
        return res.status(403).json({
          success: false,
          message: 'Insufficient permissions'
        });
      }

      const updatedSubscription = await SubscriptionService.update(subscriptionId, updates);
      res.json({ success: true, data: updatedSubscription });
    } catch (error) {
      next(error);
    }
  }
}`,
            skills: ["Modular architecture and code organization", "Input validation and error handling", "RESTful API best practices"]
          }
        ]
      }
    },
    {
      id: 3,
      title: "Web Sales Platform",
      category: "web",
      description: "A comprehensive full-stack web sales application built with React and Redux for the frontend, featuring dynamic theming, localization, and robust user account management. The backend is developed with Node.js/Express REST API server designed for enterprise sales workflows, integrating with external systems for account management, subscriptions, payments, SSO authentication, and session handling.",
      longDescription: "I implemented custom UI components, integrated RESTful services, designed scalable container/component architecture, used Sequelize ORM for MySQL, Redis for session management, and robust middleware for security, logging, and request interception.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Redux", "Material-UI", "Node.js", "Express.js", "Sequelize", "MySQL", "Redis", "JWT", "SAML SSO"],
      features: [
        "Full-stack development with React and Node.js",
        "Dynamic theme switching and localization",
        "RESTful API design and integration",
        "Sequelize ORM for relational data modeling",
        "Secure authentication (JWT, SAML SSO)",
        "Redis session management and middleware"
      ],
      metrics: {
        users: "1500+ active users",
        performance: "99.2% uptime",
        integrations: "5+ external systems"
      },
      status: "Live",
      year: "2023",
      detailedInfo: {
        summary: "Web Sales Platform is a comprehensive full-stack web sales application that I developed to handle enterprise sales workflows. The frontend features React with Redux for state management, dynamic theming, and localization, while the backend provides a robust Node.js/Express REST API server with multiple external system integrations. This project demonstrates my expertise in both frontend and backend development, showcasing skills in modern web technologies, database management, authentication systems, and enterprise-level integrations.",
        features: [
          {
            title: "App-wide Theming and Layout Architecture",
            description: "I implemented a comprehensive theming system using Material-UI with dynamic color switching and modular layout components for maintainability and scalability.",
            code: `function AppWrapper() {
    const [colors, setColors] = useState<{ primary?: string; secondary?: string }>({ primary: '', secondary: '' });

    useEffect(() => {
        setColors({ primary: getPrimaryColor(), secondary: getSecondayColor() });
    }, []);

    const theme = createTheme({
        ...themeSettings(colors.primary, colors.secondary),
    });

    return (
        <MuiThemeProvider theme={theme}>
            <Header />
            <div className={styles.content}>
                <Container>
                    <Routes />
                </Container>
            </div>
            <Footer />
        </MuiThemeProvider>
    );
}`,
            skills: ["Dynamic theme switching using Material-UI", "Modular routing and localization", "Custom UI components architecture"]
          },
          {
            title: "Redux State Management for User Operations",
            description: "I designed and implemented Redux actions and reducers for comprehensive user management, including authentication, user information, and application state handling.",
            code: `export const setUserInfo = (userInfo) => ({
    type: 'SET_USER_INFO',
    payload: userInfo,
});

export const toggleSnackbar = (message) => ({
    type: 'TOGGLE_SNACKBAR',
    payload: message,
});

export const updateUserProfile = (profileData) => ({
    type: 'UPDATE_USER_PROFILE',
    payload: profileData,
});

export const setAuthenticationStatus = (isAuthenticated) => ({
    type: 'SET_AUTH_STATUS',
    payload: isAuthenticated,
});`,
            skills: ["State management with Redux", "User authentication and account management", "Action creators and reducers design"]
          },
          {
            title: "Service Integration for User Authentication",
            description: "I developed comprehensive user authentication services with API integration for user creation, login, and session management.",
            code: `export async function createUser(userData) {
    try {
        const response = await fetch('/api/users/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': \`Bearer \${getAuthToken()}\`
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('User creation failed');
        }

        return await response.json();
    } catch (error) {
        console.error('Create user error:', error);
        throw error;
    }
}

export async function blaizeLogin(credentials) {
    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        });

        const result = await response.json();

        if (result.token) {
            localStorage.setItem('authToken', result.token);
            return result;
        }

        throw new Error(result.message || 'Login failed');
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}`,
            skills: ["RESTful service integration", "User authentication and session management", "Error handling and API communication"]
          },
          {
            title: "Sequelize Model Loader & Database Initialization",
            description: "I implemented a robust database initialization system using Sequelize ORM with dynamic model loading and configuration management for different environments.",
            code: `const db = {};
let sequelize;

if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[newConfig.use_env_variable], newConfig);
} else {
    sequelize = new Sequelize(newConfig.database, newConfig.username, newConfig.password, newConfig);
}

fs.readdirSync(__dirname)
    .filter((file) => {
        return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
    })
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;`,
            skills: ["Sequelize ORM for relational data modeling", "Dynamic model loading and associations", "Database configuration management"]
          },
          {
            title: "Express App Setup & Security Middleware",
            description: "I architected a comprehensive Express.js application with security middleware, session management, CORS handling, and request interception for enterprise-level security.",
            code: `const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const helmet = require('helmet');
const validateToken = require('@utils/validateToken');
const interceptor = require('@utils/interceptor').requestInterceptor;
const { passport } = require('@utils/microsoftEntraId');

const app = express();

// Security and parsing middleware
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
    credentials: true
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));

// Session configuration
app.use(session({
    secret: process.env.SESSION_SECRET || 'fallback-secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// Authentication middleware
app.use(passport.initialize());
app.use(passport.session());

// Security headers
app.use(helmet({ frameguard: false }));

// Custom request interceptor
app.use(interceptor);`,
            skills: ["Advanced Node.js & Express architecture", "Security middleware implementation", "Session management and CORS configuration"]
          },
          {
            title: "JWT Token Validation & Redis Session Management",
            description: "I developed a comprehensive JWT token validation system integrated with Redis for session management, providing secure authentication with token expiration handling.",
            code: `const jwt = require('jsonwebtoken');
const redis = require('./redis');

module.exports = (req, res, next) => {
    const token = req.headers['token'] || req.headers['authorization']?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({
            statusCode: 401,
            message: 'Access denied. No token provided.'
        });
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
            if (err) {
                if (err.message === 'jwt malformed') {
                    return res.status(401).json({
                        statusCode: 401,
                        message: 'Unauthorized access. Invalid token value'
                    });
                } else if (err.message === 'jwt expired') {
                    return res.status(401).json({
                        statusCode: 401,
                        message: 'Token has expired'
                    });
                }
                throw err;
            }

            req.decoded = decoded;

            // Check token in Redis session store
            redis.updateSession(token).then(isTokenExist => {
                if (isTokenExist) {
                    next();
                } else {
                    res.status(401).json({
                        message: 'Unauthorized access. Token expires',
                        statusCode: 401
                    });
                }
            }).catch(redisError => {
                console.error('Redis session check failed:', redisError);
                res.status(500).json({
                    message: 'Internal server error',
                    statusCode: 500
                });
            });
        });
    } catch (error) {
        console.error('Token validation error:', error);
        res.status(500).json({
            message: 'Internal server error',
            statusCode: 500
        });
    }
};`,
            skills: ["Secure authentication (JWT, SAML SSO)", "Redis session management", "Error handling and logging best practices"]
          }
        ]
      }
    },
    {
      id: 4,
      title: "Multi-Client Platform Solutions",
      category: "web",
      description: "Developed and implemented comprehensive subscription management and self-service portal solutions for multiple enterprise clients. I successfully adapted and customized the core functionality from existing platforms to meet specific client requirements, demonstrating expertise in scalable architecture and client-focused development.",
      longDescription: "This project showcases my ability to leverage existing robust architectures and adapt them for different client needs while maintaining code quality, performance, and security standards across multiple deployments.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "Redux", "Material-UI", "Node.js", "Express.js", "Tailwind CSS", "Client Customization"],
      features: [
        "Multi-client architecture with customizable components",
        "Scalable subscription management systems",
        "Client-specific UI/UX adaptations",
        "Consistent backend API architecture",
        "Reusable component libraries",
        "Enterprise-level deployment strategies"
      ],
      metrics: {
        clients: "Multiple enterprise clients",
        deployments: "Successful multi-environment",
        reusability: "90% code reusability"
      },
      status: "Live",
      year: "2023",
      detailedInfo: {
        summary: "Multi-Client Platform Solutions demonstrates my expertise in developing scalable, reusable software architectures that can be efficiently adapted for different enterprise clients. I successfully implemented proven functionality from existing platforms, customizing them to meet specific client requirements while maintaining high code quality and performance standards. This project highlights my ability to create maintainable, scalable solutions that serve multiple clients effectively.",
        features: [
          {
            title: "Scalable Multi-Client Architecture",
            description: "I designed and implemented a flexible architecture that allows for easy customization and deployment across multiple clients while maintaining a shared core codebase.",
            code: `// Client configuration system for multi-tenant architecture
const ClientConfig = {
  CLIENT_A: {
    theme: {
      primary: '#1976d2',
      secondary: '#dc004e',
      branding: 'CLIENT_A_BRAND'
    },
    features: ['subscriptions', 'billing', 'support'],
    apiEndpoints: {
      base: process.env.CLIENT_A_API_BASE,
      auth: '/api/client-a/auth'
    }
  },
  CLIENT_B: {
    theme: {
      primary: '#2e7d32',
      secondary: '#ed6c02',
      branding: 'CLIENT_B_BRAND'
    },
    features: ['subscriptions', 'delivery', 'complaints'],
    apiEndpoints: {
      base: process.env.CLIENT_B_API_BASE,
      auth: '/api/client-b/auth'
    }
  }
};

// Dynamic client initialization
const initializeClientApp = (clientName) => {
  const config = ClientConfig[clientName];

  return {
    theme: createTheme(config.theme),
    features: config.features,
    apiClient: new APIClient(config.apiEndpoints)
  };
};`,
            skills: ["Multi-client architecture design", "Configuration management", "Scalable system design"]
          },
          {
            title: "Reusable Component Library",
            description: "I developed a comprehensive component library that can be easily customized for different clients while maintaining consistent functionality and user experience patterns.",
            code: `// Reusable subscription management component
const SubscriptionManager = ({
  clientConfig,
  customizations = {},
  onSubscriptionUpdate
}) => {
  const theme = useTheme(clientConfig.theme);
  const apiClient = useAPIClient(clientConfig.client);

  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSubscriptions = useCallback(async () => {
    setLoading(true);
    try {
      const response = await apiClient.getSubscriptions();
      setSubscriptions(response.data);
    } catch (error) {
      handleError(error, clientConfig.errorHandling);
    } finally {
      setLoading(false);
    }
  }, [apiClient, clientConfig]);

  const handleSubscriptionChange = async (subscriptionId, updates) => {
    try {
      const updatedSubscription = await apiClient.updateSubscription(
        subscriptionId,
        updates
      );

      setSubscriptions(prev =>
        prev.map(sub =>
          sub.id === subscriptionId ? updatedSubscription : sub
        )
      );

      onSubscriptionUpdate?.(updatedSubscription);
    } catch (error) {
      handleError(error, clientConfig.errorHandling);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <SubscriptionGrid
        subscriptions={subscriptions}
        loading={loading}
        onUpdate={handleSubscriptionChange}
        customizations={customizations}
        clientBranding={clientConfig.branding}
      />
    </ThemeProvider>
  );
};`,
            skills: ["Reusable component development", "Client customization patterns", "Theme management"]
          },
          {
            title: "Client-Specific Customization System",
            description: "I implemented a flexible customization system that allows each client to have their unique branding, features, and business logic while sharing the core platform functionality.",
            code: `// Client-specific feature customization
const ClientFeatureManager = {
  CLIENT_A: {
    subscriptionFlow: {
      steps: ['selection', 'billing', 'confirmation'],
      paymentMethods: ['card', 'invoice', 'bank'],
      customValidation: (data) => validateClientASubscription(data)
    },
    dashboard: {
      widgets: ['subscriptions', 'billing', 'support'],
      layout: 'grid',
      customActions: ['export', 'print']
    }
  },

  CLIENT_B: {
    subscriptionFlow: {
      steps: ['selection', 'delivery', 'billing', 'confirmation'],
      paymentMethods: ['card', 'invoice'],
      customValidation: (data) => validateClientBSubscription(data)
    },
    dashboard: {
      widgets: ['subscriptions', 'delivery', 'complaints'],
      layout: 'list',
      customActions: ['schedule', 'track']
    }
  }
};

// Dynamic feature rendering based on client
const renderClientFeatures = (client, userPermissions) => {
  const features = ClientFeatureManager[client];

  return features.dashboard.widgets
    .filter(widget => userPermissions.includes(widget))
    .map(widget => {
      const Component = WidgetComponents[widget];
      return (
        <Component
          key={widget}
          config={features[widget]}
          customActions={features.dashboard.customActions}
          client={client}
        />
      );
    });
};`,
            skills: ["Client-specific customization", "Feature management", "Dynamic rendering"]
          },
          {
            title: "Unified Backend API Architecture",
            description: "I designed a unified backend architecture that serves multiple clients while maintaining data isolation and client-specific business logic through a multi-tenant approach.",
            code: `// Multi-tenant API architecture
class MultiTenantController {
  constructor() {
    this.clientServices = {
      CLIENT_A: new ClientAService(),
      CLIENT_B: new ClientBService()
    };
  }

  async handleSubscriptionRequest(req, res) {
    try {
      const { client } = req.headers;
      const { userId } = req.user;

      // Client validation
      if (!this.clientServices[client]) {
        return res.status(400).json({
          error: 'Invalid client identifier'
        });
      }

      // Get client-specific service
      const service = this.clientServices[client];

      // Apply client-specific business logic
      const subscriptionData = await service.processSubscription({
        ...req.body,
        userId,
        clientConfig: this.getClientConfig(client)
      });

      // Client-specific response formatting
      const response = service.formatResponse(subscriptionData);

      res.json({
        success: true,
        data: response,
        client: client
      });

    } catch (error) {
      this.handleClientError(error, req.headers.client, res);
    }
  }

  getClientConfig(client) {
    return {
      CLIENT_A: {
        database: 'client_a_db',
        features: ['billing', 'support'],
        integrations: ['payment_gateway_a']
      },
      CLIENT_B: {
        database: 'client_b_db',
        features: ['delivery', 'complaints'],
        integrations: ['delivery_service', 'payment_gateway_b']
      }
    }[client];
  }
}`,
            skills: ["Multi-tenant architecture", "Client isolation", "Unified API design"]
          }
        ]
      }
    }
  ];

  // All projects are web development, so no need for filtering

  return (
    <section id="projects" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work in frontend development, featuring modern web applications and innovative solutions
          </p>
        </div>



        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-dark-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 border border-gray-700 hover:border-primary-500/50 animate-slide-up"
              style={{animationDelay: `${0.4 + index * 0.1}s`}}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-900/20 to-accent-900/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-primary-400 mx-auto mb-2 group-hover:text-accent-400 transition-colors duration-300 transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-primary-400 font-medium group-hover:text-accent-400 transition-colors duration-300">{project.title}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-success-500/20 text-success-400 px-2 py-1 rounded-full text-xs font-medium border border-success-500/30">
                    {project.status}
                  </span>
                </div>
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-400 group-hover:text-accent-400 transition-colors">{project.year}</span>
                </div>

                <p className="text-gray-300 mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded-md font-medium border border-gray-600 group-hover:border-primary-500/50 group-hover:text-primary-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-dark-700 text-gray-400 text-xs rounded-md border border-gray-600 group-hover:border-accent-500/50 group-hover:text-accent-400 transition-all duration-300">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Key Metrics */}
                <div className="border-t border-gray-700 pt-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="font-semibold text-white group-hover:text-primary-400 transition-colors">{value}</div>
                        <div className="text-gray-400 capitalize group-hover:text-gray-300 transition-colors">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-2 px-4 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 text-sm font-medium transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-up" style={{animationDelay: '0.8s'}}>
          <p className="text-gray-300 mb-6">
            Interested in seeing more of my work or discussing a project?
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-3 rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-300 font-medium shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 animate-glow"
          >
            Let's Work Together
          </button>
        </div>
      </div>

      {/* Project Detail Popup */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-dark-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl animate-slide-up">
            {/* Header */}
            <div className="sticky top-0 bg-dark-800 border-b border-gray-700 p-6 flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <p className="text-gray-300">{selectedProject.description}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-700 rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Summary */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Project Summary</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {selectedProject.detailedInfo.summary}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-primary-300 rounded-full border border-primary-500/30 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Detailed Features */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white mb-6">Technical Implementation & Skills</h3>
                {selectedProject.detailedInfo.features.map((feature, index) => (
                  <div key={index} className="bg-dark-900 rounded-xl p-6 border border-gray-700">
                    <h4 className="text-xl font-bold text-primary-400 mb-3">{index + 1}. {feature.title}</h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>

                    {/* Code Block */}
                    <div className="bg-black/50 rounded-lg p-4 mb-4 border border-gray-600">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-400 font-medium">Code Implementation</span>
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <pre className="text-sm text-gray-300 overflow-x-auto">
                        <code>{feature.code}</code>
                      </pre>
                    </div>

                    {/* Skills */}
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3">Skills Demonstrated:</h5>
                      <ul className="space-y-2">
                        {feature.skills.map((skill, skillIndex) => (
                          <li key={skillIndex} className="flex items-start">
                            <svg className="w-5 h-5 text-success-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-300">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Project Metrics */}
              <div className="mt-8 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-xl p-6 border border-primary-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">Project Impact</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(selectedProject.metrics).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary-400 mb-1">{value}</div>
                      <div className="text-gray-300 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
