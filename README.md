# @abhishek-sah/authman

A modern, customizable React authentication package with pre-built Login and Signup components. AuthMan provides beautiful, production-ready UI components combined with a robust authentication service layer to streamline user authentication in your applications.

## Features

✨ **Pre-built Components**
- Modern, responsive Login component with email validation and password visibility toggle
- Feature-rich Signup component with password confirmation and custom fields support
- Beautiful UI built with Tailwind CSS with smooth animations and transitions

🔒 **Authentication Service**
- Simple API integration with configurable base URL
- Token-based authentication (localStorage/sessionStorage)
- User data persistence
- Error handling with meaningful messages
- Remember me functionality for login sessions

🎨 **Customizable**
- Dynamic form fields for signup
- Custom headings and subheadings
- Support for multiple field types (email, text, tel, etc.)
- Flexible callback handlers for form submission

📱 **Responsive Design**
- Mobile-first approach
- Works seamlessly on all screen sizes
- Accessible form elements with proper labels and ARIA attributes

## Installation

```bash
npm install @abhishek-sah/authman
```

or with yarn:

```bash
yarn add @abhishek-sah/authman
```

## Quick Start

### 1. Configure the Authentication Service

Initialize the authentication service with your backend URL at the start of your application:

```jsx
import { configureAuthService } from '@abhishek-sah/authman';

configureAuthService({
  baseURL: 'https://your-api.com',
  headers: {
    // optional custom headers
  }
});
```

### 2. Use the Login Component

```jsx
import { Login } from '@abhishek-sah/authman';
import { login } from '@abhishek-sah/authman';

export default function LoginPage() {
  const handleLogin = async (formData, rememberMe) => {
    try {
      const response = await login('/auth/login', formData, rememberMe);
      console.log('Login successful:', response);
      // Handle successful login (redirect, etc.)
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Login
        onSubmit={handleLogin}
        heading="Welcome Back"
        subheading="Sign in to your account to continue"
        fields={[
          { name: 'email', type: 'email', label: 'Email' }
        ]}
      />
    </div>
  );
}
```

### 3. Use the Signup Component

```jsx
import { Signup } from '@abhishek-sah/authman';
import { signup } from '@abhishek-sah/authman';

export default function SignupPage() {
  const handleSignup = async (formData) => {
    try {
      const response = await signup('/auth/signup', formData);
      console.log('Signup successful:', response);
      // Handle successful signup (redirect to login, etc.)
    } catch (error) {
      console.error('Signup failed:', error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Signup
        onSubmit={handleSignup}
        heading="Create Account"
        subheading="Join us today and start your journey"
        fields={[
          { name: 'email', type: 'email', label: 'Email' },
          { name: 'firstName', type: 'text', label: 'First Name' },
          { name: 'lastName', type: 'text', label: 'Last Name' },
          { name: 'mobileNumber', type: 'tel', label: 'Mobile Number' }
        ]}
      />
    </div>
  );
}
```

## API Reference

### Components

#### Login Component

A customizable login form component with email and password fields.

**Props:**

```typescript
interface LoginProps {
  onSubmit: (formData: object, rememberMe: boolean) => void | Promise<void>;
  heading?: string;           // Default: "Welcome Back"
  subheading?: string;        // Default: "Sign in to your account to continue"
  fields?: Array<{
    name: string;
    type: string;            // 'email', 'text', etc.
    label: string;
  }>;
}
```

**Features:**
- Email validation
- Password field with show/hide toggle
- Remember me checkbox
- "Forgot password?" link
- Sign up redirect link
- Form validation with error messages

#### Signup Component

A feature-rich signup form with password confirmation and custom fields.

**Props:**

```typescript
interface SignupProps {
  onSubmit: (formData: object) => void | Promise<void>;
  heading?: string;          // Default: "Create Account"
  subheading?: string;       // Default: "Join us today and start your journey"
  fields?: Array<{
    name: string;
    type: string;           // 'email', 'text', 'tel', etc.
    label: string;
  }>;
}
```

**Features:**
- Dynamic custom fields support
- Email validation
- Password and confirm password fields with visibility toggle
- Password strength validation (minimum 6 characters)
- Password match validation
- Security badges (Secure & Encrypted, Privacy Protected)
- Sign in redirect link

### Authentication Service

#### `configureAuthService(config)`

Initialize the authentication service with your API configuration.

**Parameters:**

```typescript
interface Config {
  baseURL: string;                  // Your API base URL
  headers?: Record<string, string>; // Optional custom headers
}
```

**Example:**

```jsx
configureAuthService({
  baseURL: 'https://api.example.com',
  headers: {
    'X-Custom-Header': 'value'
  }
});
```

#### `login(endpoint, formData, rememberMe?)`

Authenticate a user with email and password.

**Parameters:**
- `endpoint` (string): API endpoint (e.g., '/auth/login')
- `formData` (object): Form data containing email and password
- `rememberMe` (boolean, optional): If true, uses localStorage; otherwise uses sessionStorage

**Returns:** Promise that resolves to response data

**Response Data:**
```javascript
{
  token: "jwt_token_here",
  user: {
    id: "user_id",
    email: "user@example.com",
    // ... other user fields
  }
}
```

**Example:**

```jsx
try {
  const response = await login('/auth/login', 
    { email: 'user@example.com', password: 'password123' }, 
    true // remember me
  );
  console.log(response.token);
} catch (error) {
  console.error(error.message);
}
```

#### `signup(endpoint, formData)`

Register a new user account.

**Parameters:**
- `endpoint` (string): API endpoint (e.g., '/auth/signup')
- `formData` (object): Form data with user information

**Returns:** Promise that resolves to response data

**Example:**

```jsx
try {
  const response = await signup('/auth/signup', {
    email: 'newuser@example.com',
    firstName: 'John',
    lastName: 'Doe',
    password: 'securePassword123',
    mobileNumber: '+1234567890'
  });
  console.log('Account created:', response);
} catch (error) {
  console.error(error.message);
}
```

#### `logout()`

Clear authentication tokens and user data from both localStorage and sessionStorage.

**Example:**

```jsx
import { logout } from '@abhishek-sah/authman';

function LogoutButton() {
  const handleLogout = () => {
    logout();
    // Redirect to login page
    window.location.href = '/login';
  };

  return <button onClick={handleLogout}>Logout</button>;
}
```

## Backend Integration

Your backend API should handle the following endpoints:

### POST `/auth/login`

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe"
  }
}
```

### POST `/auth/signup`

**Request:**
```json
{
  "email": "newuser@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "password": "securePassword123",
  "mobileNumber": "+1234567890"
}
```

**Response:**
```json
{
  "message": "User created successfully",
  "user": {
    "id": "new_user_id",
    "email": "newuser@example.com"
  }
}
```

## Error Handling

The authentication service includes built-in error handling. Errors are caught and converted to meaningful messages:

```jsx
try {
  await login('/auth/login', formData, true);
} catch (error) {
  // error.message will contain one of:
  // - Server error message (from response.data.message)
  // - "No response from the server"
  // - Network error message
  console.error(error.message);
}
```

## Styling

The components are built with Tailwind CSS core utilities. To ensure proper styling:

1. Install Tailwind CSS in your project:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

2. Configure your Tailwind CSS setup (see [Tailwind documentation](https://tailwindcss.com/docs/installation))

3. Import Tailwind CSS in your main CSS file:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

## Advanced Usage

### Custom Form Fields

Extend the signup form with additional fields:

```jsx
<Signup
  fields={[
    { name: 'email', type: 'email', label: 'Email Address' },
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'company', type: 'text', label: 'Company' },
    { name: 'phone', type: 'tel', label: 'Phone Number' },
    { name: 'country', type: 'text', label: 'Country' }
  ]}
  onSubmit={handleSignup}
/>
```

### Custom Headers

Add custom headers for your API requests:

```jsx
configureAuthService({
  baseURL: 'https://api.example.com',
  headers: {
    'Authorization': 'Bearer token',
    'X-API-Key': 'your-api-key',
    'X-Client-ID': 'your-client-id'
  }
});
```

### Form Submission with Loading States

```jsx
const [isLoading, setIsLoading] = useState(false);

const handleLogin = async (formData, rememberMe) => {
  setIsLoading(true);
  try {
    const response = await login('/auth/login', formData, rememberMe);
    // Handle success
  } catch (error) {
    // Handle error
  } finally {
    setIsLoading(false);
  }
};
```

## Browser Storage

By default, the `login` function uses:
- **localStorage** when `rememberMe` is `true` (persistent across sessions)
- **sessionStorage** when `rememberMe` is `false` (cleared when tab closes)

Retrieve stored authentication data:

```jsx
// Get token
const token = localStorage.getItem('auth_token');

// Get user
const user = JSON.parse(localStorage.getItem('user'));
```

## Validation Rules

### Login Form
- **Email**: Required, must be valid email format
- **Password**: Required, minimum 6 characters

### Signup Form
- **Email**: Required, must be valid email format
- **Password**: Required, minimum 6 characters
- **Confirm Password**: Required, must match password
- **Custom Fields**: Required based on configuration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies

- React 16.8+ (hooks support required)
- Tailwind CSS 3.0+
- Axios 0.27+
- lucide-react 0.263.1+

## License

MIT

## Contributing

Contributions are welcome! I'd love to have your help in improving AuthMan. Here's how you can contribute:

### Steps to Contribute

1. Fork the repository on [GitHub](https://github.com/sah-abhishek/authman)
2. Clone your forked repository
   ```bash
   git clone https://github.com/sah-abhishek/authman.git
   cd authman
   ```
3. Create a new branch for your feature or bugfix
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. Make your changes and test thoroughly
5. Commit your changes with clear messages
   ```bash
   git commit -m "Add feature: description of your changes"
   ```
6. Push to your forked repository
   ```bash
   git push origin feature/your-feature-name
   ```
7. Submit a Pull Request to the main repository

### Guidelines

- Follow the existing code style and structure
- Add tests for new features
- Update documentation if needed
- Keep commit messages clear and descriptive
- One feature per pull request

## Support & Contact

### GitHub Issues

For bug reports, feature requests, or issues, please open an issue on the [GitHub repository](https://github.com/abhishek-sah/authman/issues).

### Get in Touch

- **GitHub**: [@sah-abhishek](https://github.com/sah-abhishek)
- **Email**: [abhisheksah3333@gmail.com](mailto:abhisheksah3333@gmail.com)
- **Twitter**: [@abhish_x](https://x.com/abhish_x)

Feel free to reach out if you have questions, suggestions, or just want to say hi!

## Sponsorship

If you find AuthMan helpful, consider supporting the project. Your support motivates me to keep improving and maintaining this package.

---

Made with ❤️ by Abhishek Sah

## Changelog

### Version 1.0.2
- Initial release
- Login and Signup components
- Authentication service with token management
- Form validation
- Remember me functionality
- Error handling

---

Made with ❤️ by Abhishek Sah
