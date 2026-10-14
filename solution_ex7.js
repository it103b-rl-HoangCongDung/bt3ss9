let hotelRooms = [
  { roomId: 'P101', roomType: 'Standard', pricePerNight: 1200000, status: 'VACANT' },
  { roomId: 'P102', roomType: 'Deluxe', pricePerNight: 2000000, status: 'VACANT' },
  { roomId: 'P103', roomType: 'Suite', pricePerNight: 3000000, status: 'MAINTENANCE' }
];

console.log('--- DANH SÁCH PHÒNG BAN ĐẦU ---');
console.table(hotelRooms);

hotelRooms.push({
  roomId: 'P104',
  roomType: 'VIP Suite',
  pricePerNight: 3500000,
  status: 'VACANT'
});
console.log('--- SAU KHI THÊM PHÒNG P104 ---');
console.table(hotelRooms);

let searchRoomId = 'P102';
let foundRoom = hotelRooms.find(room => room.roomId === searchRoomId);
console.log('--- KẾT QUẢ TÌM KIẾM PHÒNG ' + searchRoomId + ' ---');
console.log(foundRoom);

let targetUpdateId = 'P101';
let roomToUpdate = hotelRooms.find(room => room.roomId === targetUpdateId);
if (roomToUpdate) {
  roomToUpdate.status = 'OCCUPIED';
}
console.log('--- SAU KHI CẬP NHẬT TRẠNG THÁI P101 THÀNH OCCUPIED ---');
console.table(hotelRooms);

let targetDeleteId = 'P103';
let deleteIndex = hotelRooms.findIndex(room => room.roomId === targetDeleteId);
if (deleteIndex !== -1) {
  hotelRooms.splice(deleteIndex, 1);
}
console.log('--- SAU KHI XÓA PHÒNG P103 ---');
console.table(hotelRooms);