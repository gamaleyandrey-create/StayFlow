import 'package:flutter/material.dart';

void main() {
  runApp(const StayFlowGuestApp());
}

class StayFlowGuestApp extends StatelessWidget {
  const StayFlowGuestApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'StayFlow Guest',
      theme: ThemeData(primarySwatch: Colors.indigo),
      home: const GuestWelcomeScreen(),
    );
  }
}

class GuestWelcomeScreen extends StatelessWidget {
  const GuestWelcomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('StayFlow Guest')),
      body: const Padding(
        padding: EdgeInsets.all(16),
        child: Text('Welcome: Check-in, WiFi, Door Code, Guide, Chat, Services'),
      ),
    );
  }
}
