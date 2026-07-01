import 'package:flutter/material.dart';
import '../../models/property.dart';
import '../../widgets/property_card.dart';
import 'property_details_screen.dart';

class PropertiesScreen extends StatelessWidget {
  const PropertiesScreen({super.key});

  static final properties = [
    Property(id: '1', title: 'Apartment Marbella 01', address: 'Marbella Center', city: 'Marbella', status: 'READY', bedrooms: 2, bathrooms: 1, maxGuests: 4),
    Property(id: '2', title: 'Villa Nueva Andalucia', address: 'Nueva Andalucia', city: 'Marbella', status: 'CLEANING_NEEDED', bedrooms: 4, bathrooms: 3, maxGuests: 8),
    Property(id: '3', title: 'Studio Malaga Port', address: 'Malaga Port', city: 'Malaga', status: 'OCCUPIED', bedrooms: 1, bathrooms: 1, maxGuests: 2),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Properties')),
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: properties.length,
        itemBuilder: (context, index) {
          final property = properties[index];
          return PropertyCard(
            property: property,
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (_) => PropertyDetailsScreen(property: property)),
              );
            },
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: const Icon(Icons.add),
      ),
    );
  }
}
