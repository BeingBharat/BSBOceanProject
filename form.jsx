// FormComponent.jsx
import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FormComponent = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit({ email, password });
    }
  };

  return (
    <View style={styles.container} accessibilityLabel="login-form">
      <Text style={styles.title}>Login Form</Text>
      
      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          testID="email-input"
          accessibilityLabel="email-input"
        />
        {errors.email && <Text style={styles.errorText} testID="email-error">{errors.email}</Text>}
      </View>
      
      <View style={styles.inputContainer}>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
          testID="password-input"
          accessibilityLabel="password-input"
        />
        {errors.password && <Text style={styles.errorText} testID="password-error">{errors.password}</Text>}
      </View>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleSubmit}
        testID="submit-button"
        accessibilityRole="button"
        accessibilityLabel="submit-button"
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default FormComponent;