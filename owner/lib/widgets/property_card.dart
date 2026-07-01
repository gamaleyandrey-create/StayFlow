import 'package:flutter/material.dart';
import '../models/property.dart';
import 'status_badge.dart';

class PropertyCard extends StatelessWidget {
  final Property property;
  final VoidCallback onTap;

  const PropertyCard({
    super.key,
    required this.property,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 0,
      color: Colors.white,
      child: ListTile(
        onTap: onTap,
        leading: const CircleAvatar(child: Icon(Icons.home)),
        title: Text(property.title, style: const TextStyle(fontWeight: FontWeight.bold)),
        subtitle: Text('${property.city} · ${property.bedrooms} bed · ${property.maxGuests} guests'),
        trailing: StatusBadge(status: property.status),
      ),
    );
  }
}
