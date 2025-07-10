export const mockCourses = [
    {
      id: 1,
      name: "React Masterclass",
      price: 499000,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Learn React from scratch",
      longDescription: "Comprehensive React course covering hooks, state management, and more. Build real-world applications with modern React practices.",
      rating: 4.5,
      instructor: "Jane Smith",
      duration: "32 hours",
      students: 1250
    },
    {
      id: 2,
      name: "Vue.js Essentials",
      price: 750000,
      image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Master Vue.js fundamentals",
      longDescription: "In-depth Vue.js course with real-world projects. Learn component architecture, Vuex, and Vue Router.",
      rating: 4.7,
      instructor: "John Doe",
      duration: "28 hours",
      students: 980
    },
    {
      id: 3,
      name: "AI for Beginners",
      price: 1200000,
      image: "https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      description: "Intro to AI concepts",
      longDescription: "Explore AI fundamentals and practical applications. Hands-on projects with TensorFlow and PyTorch.",
      rating: 4.8,
      instructor: "Dr. Sarah Johnson",
      duration: "45 hours",
      students: 2100
    },
    {
      id: 4,
      name: "Python Bootcamp",
      price: 600000,
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      description: "Python programming basics",
      longDescription: "Learn Python programming with hands-on projects. From syntax to web development and data analysis.",
      rating: 4.6,
      instructor: "Mike Chen",
      duration: "36 hours",
      students: 3200
    }
  ];
  
  export const mockApi = {
    getSuggestions: async() => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      try {
        return { success: true, data: mockCourses.slice(0, 2) };
      } catch {
        return { success: false, error: "Failed to fetch suggestions" };
      }
    }
  };