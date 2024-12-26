import React from 'react';
import { Chrome } from 'lucide-react'; // Using Chrome icon as fallback for Google

interface SocialLoginProps {
  onGoogleAuth: () => void;
}

export default function SocialLogin({ onGoogleAuth }: SocialLoginProps) {
  return (
    <div className="space-y-4">
      <button
        onClick={onGoogleAuth}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
      >
        <Chrome size={20} />
        Continue with Google
      </button>
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>
    </div>
  );
}