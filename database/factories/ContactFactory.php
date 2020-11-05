<?php

namespace Database\Factories;

use App\Models\Contact;
use Illuminate\Database\Eloquent\Factories\Factory;

class ContactFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Contact::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => 'Тонирование и оклейка авто',
            'description' => 'Качественное тонирование и оклеивание  вашего автомобиля нашими специалистами. Высококачественные пленки от проверенных поставщиков с гарантией выполненной работы 3 года. Записывайтесь и получайте скидку 5%.',
            'keywords' => 'тонировка, оклейка авто, автомобиль, тюнинг, СПБ, Санкт-Петербург, Питер, гарантия, низкие цены, удобная оплата,',
            'phone' => '+74957556983',
            'email' => 'carstyle@gmail.com',
            'address' => 'Краснобогатырская ул., 13, с1',
            'instagram' => 'https://instagram.com/carstyle/',
            'whatsapp' => 'https://wa.link/tu14r5',
            'yandex' => 'https://yandex.ru/map-widget/v1/-/CCQ~nEg3tD',
        ];
    }
}
