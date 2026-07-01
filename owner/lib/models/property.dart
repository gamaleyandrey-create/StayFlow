class Property {
  final String id;
  final String title;
  final String address;
  final String city;
  final String status;
  final int bedrooms;
  final int bathrooms;
  final int maxGuests;

  Property({
    required this.id,
    required this.title,
    required this.address,
    required this.city,
    required this.status,
    required this.bedrooms,
    required this.bathrooms,
    required this.maxGuests,
  });

  factory Property.fromJson(Map<String, dynamic> json) {
    return Property(
      id: json['id'].toString(),
      title: json['title'] ?? '',
      address: json['address'] ?? '',
      city: json['city'] ?? '',
      status: json['status'] ?? 'FREE',
      bedrooms: json['bedrooms'] ?? 0,
      bathrooms: json['bathrooms'] ?? 0,
      maxGuests: json['maxGuests'] ?? 0,
    );
  }
}
