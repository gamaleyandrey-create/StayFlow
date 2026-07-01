import 'package:flutter/material.dart';
import '../../models/property.dart';
import '../../widgets/status_badge.dart';

class PropertyDetailsScreen extends StatelessWidget {
  final Property property;

  const PropertyDetailsScreen({super.key, required this.property});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(property.title)),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          Container(
            height: 180,
            decoration: BoxDecoration(
              color: Colors.blueGrey.shade100,
              borderRadius: BorderRadius.circular(18),
            ),
            child: const Center(child: Icon(Icons.apartment, size: 72)),
          ),
          const SizedBox(height: 16),
          Row(
            children: [
              Expanded(child: Text(property.title, style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold))),
              StatusBadge(status: property.status),
            ],
          ),
          const SizedBox(height: 8),
          Text(property.address),
          const SizedBox(height: 24),
          Card(
            child: ListTile(
              leading: const Icon(Icons.hotel),
              title: Text('${property.bedrooms} bedrooms · ${property.bathrooms} bathrooms'),
              subtitle: Text('Max guests: ${property.maxGuests}'),
            ),
          ),
          const Card(
            child: ListTile(
              leading: Icon(Icons.wifi),
              title: Text('WiFi and door code'),
              subtitle: Text('Add details in next version'),
            ),
          ),
          const Card(
            child: ListTile(
              leading: Icon(Icons.event),
              title: Text('Calendar'),
              subtitle: Text('Bookings and tasks timeline'),
            ),
          ),
          const SizedBox(height: 16),
          FilledButton.icon(
            onPressed: () {},
            icon: const Icon(Icons.add),
            label: const Text('Create booking'),
          ),
          const SizedBox(height: 8),
          OutlinedButton.icon(
            onPressed: () {},
            icon: const Icon(Icons.task_alt),
            label: const Text('Create task'),
          ),
        ],
      ),
    );
  }
}
