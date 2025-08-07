"use strict";

// Mobile Navigation Toggle
var mobileToggle = document.querySelector('.mobile-toggle');
var navMenu = document.querySelector('.nav-menu');
mobileToggle.addEventListener('click', function () {
  navMenu.classList.toggle('active');
  mobileToggle.querySelector('i').classList.toggle('fa-bars');
  mobileToggle.querySelector('i').classList.toggle('fa-times');
}); // Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    var targetId = this.getAttribute('href');
    var targetElement = document.querySelector(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: 'smooth'
    }); // Close mobile menu if open

    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      mobileToggle.querySelector('i').classList.add('fa-bars');
      mobileToggle.querySelector('i').classList.remove('fa-times');
    }
  });
}); // Chat Widget

var chatIcon = document.getElementById('chatIcon');
var chatContainer = document.getElementById('chatContainer');
var closeChat = document.getElementById('closeChat');
var chatMessages = document.getElementById('chatMessages');
var userInput = document.getElementById('userInput');
var sendMessage = document.getElementById('sendMessage');
chatIcon.addEventListener('click', function () {
  chatContainer.style.display = 'flex';
});
closeChat.addEventListener('click', function () {
  chatContainer.style.display = 'none';
});

function addMessage(message, sender) {
  var messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.classList.add(sender);
  messageDiv.textContent = message;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(userMessage) {
  userMessage = userMessage.toLowerCase();

  if (userMessage.includes('service') || userMessage.includes('offer')) {
    return "Knowledge Centre offers five main service areas: 1) Books Services, 2) ICT Solutions, 3) Training & Development, 4) Consultancy & Research, and 5) Business Innovation. How can I assist you with our services?";
  } else if (userMessage.includes('contact') || userMessage.includes('reach')) {
    return "You can reach us via email at info@knowledgecentre.ng or call +234 812 345 6789. Our headquarters are in Lagos, Nigeria. Would you like to send us a message directly?";
  } else if (userMessage.includes('about') || userMessage.includes('who')) {
    return "Knowledge Centre is Nigeria's pioneer indigenous Knowledge Management Organisation, established in 2001. We specialize in Strategy, People Development, Organisational Development, and more, with a global network of experts.";
  } else if (userMessage.includes('network') || userMessage.includes('global')) {
    return "We have a global network of professionals across more than 30 countries. Our GLOCALISATION approach combines global best practices with local implementation. Would you like to join our network?";
  } else {
    return "Thank you for your message. A Knowledge Centre representative will respond to your inquiry shortly. In the meantime, is there anything else I can assist you with?";
  }
}

sendMessage.addEventListener('click', function () {
  var message = userInput.value.trim();

  if (message) {
    addMessage(message, 'user');
    userInput.value = ''; // Simulate thinking delay

    setTimeout(function () {
      var botResponse = getBotResponse(message);
      addMessage(botResponse, 'bot');
    }, 1000);
  }
});
userInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    sendMessage.click();
  }
}); // Form Submission

var contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message! We will contact you shortly.');
  contactForm.reset();
});
//# sourceMappingURL=main.dev.js.map
