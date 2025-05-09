
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const DateInvitation = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showDetails, setShowDetails] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [showHearts, setShowHearts] = useState(false);
  const [messages, setMessages] = useState<string[]>([
    "Нет",
    "Уверен(а)?",
    "Точно?",
    "Подумай еще раз!",
    "Последний шанс!",
    "Не будь таким(ой)!",
    "Ты разбиваешь мне сердце :(",
    "Я очень расстроюсь...",
    "Пожалуйста?"
  ]);

  // Перемещение кнопки "Нет"
  const moveNoButton = () => {
    setNoCount(prev => prev + 1);
    const x = Math.random() * (window.innerWidth / 2) - 100;
    const y = Math.random() * (window.innerHeight / 2) - 100;
    setNoButtonPosition({ x, y });
  };

  // Обработчик нажатия на "Да"
  const handleYesClick = () => {
    setShowDetails(true);
    setShowHearts(true);
  };

  const getNoButtonText = () => {
    return messages[Math.min(noCount, messages.length - 1)];
  };

  const generateHearts = () => {
    const hearts = [];
    for (let i = 0; i < 15; i++) {
      const left = `${Math.random() * 100}%`;
      const animationDuration = `${10 + Math.random() * 15}s`;
      const startPosition = `${Math.random() * 100}%`;
      const size = `${1 + Math.random() * 2}rem`;
      const delay = `${Math.random() * 8}s`;

      hearts.push(
        <div
          key={i}
          className="heart absolute"
          style={{
            left,
            fontSize: size,
            animationDuration,
            bottom: `-10%`,
            animationDelay: delay
          }}
        >
          ❤️
        </div>
      );
    }
    return hearts;
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 heart-bg relative">
      {showHearts && (
        <div className="floating-hearts">
          {generateHearts()}
        </div>
      )}
      
      <div className="w-full max-w-md z-10">
        {!showDetails ? (
          <Card className="bg-white card-shadow border-deep-purple">
            <CardHeader className="pb-2">
              <div className="flex justify-center">
                <Icon name="Heart" className="text-deep-purple w-12 h-12 animate-pulse-slow" />
              </div>
              <h2 className="text-3xl font-romantic text-center text-deep-purple mt-4">
                Приглашение на свидание
              </h2>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
              <p className="text-lg">
                Дорогой мой человек, ты согласишься пойти со мной на свидание?
              </p>
              
              <div className="flex justify-center gap-4 pt-4">
                <Button 
                  onClick={handleYesClick}
                  className="bg-deep-purple hover:bg-dark-purple text-white px-8 py-6 rounded-full font-medium text-lg"
                >
                  <Icon name="Heart" className="mr-2 h-5 w-5" />
                  Да!
                </Button>
                
                <div
                  style={{
                    position: noCount > 0 ? 'absolute' : 'relative',
                    transform: noCount > 0 ? `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)` : 'none',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <Button 
                    onClick={moveNoButton}
                    variant="outline" 
                    className="border-deep-purple hover:bg-light-purple text-deep-purple px-8 py-6 rounded-full font-medium text-lg"
                  >
                    {getNoButtonText()}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-white card-shadow border-deep-purple animate-slide-up">
            <CardHeader>
              <div className="flex justify-center">
                <Icon name="PartyPopper" className="text-deep-purple w-12 h-12 animate-float" />
              </div>
              <h2 className="text-3xl font-romantic text-center text-deep-purple mt-4">
                Ура! Ты согласился(-ась)!
              </h2>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
              <p className="text-lg">
                Я буду ждать тебя:
              </p>
              
              <div className="bg-light-purple p-4 rounded-lg space-y-3">
                <div className="flex items-center gap-2 justify-center">
                  <Icon name="CalendarHeart" className="text-deep-purple" />
                  <span className="font-medium">14 мая, 19:00</span>
                </div>
                
                <div className="flex items-center gap-2 justify-center">
                  <Icon name="MapPin" className="text-deep-purple" />
                  <span className="font-medium">Ресторан "Романтика"</span>
                </div>
                
                <div className="flex items-center gap-2 justify-center">
                  <Icon name="HeartHandshake" className="text-deep-purple" />
                  <span>Одевайся как хочешь, я буду рад(а) тебя видеть в любом виде</span>
                </div>
              </div>
              
              <div className="pt-4">
                <p className="text-deep-purple font-romantic text-2xl">
                  С нетерпением жду нашей встречи! ❤️
                </p>
                <Button 
                  onClick={() => window.location.reload()} 
                  className="mt-4 bg-romantic-pink hover:bg-deep-purple text-dark-purple hover:text-white"
                >
                  <Icon name="RefreshCcw" className="mr-2 h-4 w-4" />
                  Начать сначала
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default DateInvitation;
