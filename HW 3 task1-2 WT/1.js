const t = Number.parseFloat(prompt('Введите температуру в градусах Цельсия, С: '));
alert(`Цельсий: ${t}, Фаренгейт: ${((9 / 5) * t + 32).toFixed(1)}`)