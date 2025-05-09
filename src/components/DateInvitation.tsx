
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { motion } from 'framer-motion';

const DateInvitation = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showDetails, setShowDetails] = useState(false);
  const [noCount, setNoCount] = useState(0);
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
  };

  const getNoButtonText = () => {
    return messages[Math.min(noCount, messages.length - 1)];
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 heart-bg">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {!showDetails ? (
          <Card className="bg-white card-shadow border-deep-purple">
            <CardHeader className="pb-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex justify-center"
              >
                <Icon name="Heart" className="text-deep-purple w-12 h-12 animate-pulse-slow" />
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-3xl font-romantic text-center text-deep-purple mt-4"
              >
                Приглашение на свидание
              </motion.h2>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-lg"
              >
                Дорогой мой человек, ты согласишься пойти со мной на свидание?
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="flex justify-center gap-4 pt-4"
              >
                <Button 
                  onClick={handleYesClick}
                  className="bg-deep-purple hover:bg-dark-purple text-white px-8 py-6 rounded-full font-medium text-lg animate-pulse-slow"
                >
                  <Icon name="Heart" className="mr-2 h-5 w-5" />
                  Да!
                </Button>
                
                <motion.div
                  style={{
                    position: noCount > 0 ? 'absolute' : 'relative',
                    x: noButtonPosition.x,
                    y: noButtonPosition.y
                  }}
                >
                  <Button 
                    onClick={moveNoButton}
                    variant="outline" 
                    className="border-deep-purple hover:bg-light-purple text-deep-purple px-8 py-6 rounded-full font-medium text-lg"
                  >
                    {getNoButtonText()}
                  </Button>
                </motion.div>
              </motion.div>
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
              </div>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </div>
  );
};

export default DateInvitation;
