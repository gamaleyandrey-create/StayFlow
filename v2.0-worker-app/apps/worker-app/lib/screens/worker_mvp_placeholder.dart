import 'package:flutter/material.dart';

class WorkerMvpPlaceholder extends StatelessWidget {
  const WorkerMvpPlaceholder({super.key});

  @override
  Widget build(BuildContext context) {
    final tasks = [
      'Cleaning — Apartment Marbella 01',
      'Repair — Air conditioner',
      'Inspection — Villa Nueva Andalucia',
    ];

    return Scaffold(
      appBar: AppBar(title: const Text('StayFlow Worker MVP')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: tasks.map((t) => Card(child: ListTile(title: Text(t)))).toList(),
      ),
    );
  }
}
