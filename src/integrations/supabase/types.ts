export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export type Database = {
    __InternalSupabase: {
        PostgrestVersion: "14.5"
    }
    public: {
        Tables: {
            conversations: {
                Row: {
                    created_at: string
                    id: string
                    model: string
                    title: string
                    updated_at: string
                    user_id: string
                }
                Insert: {
                    created_at?: string
                    id?: string
                    model?: string
                    title?: string
                    updated_at?: string
                    user_id: string
                }
                Update: {
                    created_at?: string
                    id?: string
                    model?: string
                    title?: string
                    updated_at?: string
                    user_id?: string
                }
                Relationships: []
            }
            messages: {
                Row: {
                    conversation_id: string
                    created_at: string
                    id: string
                    parts: Json
                    role: string
                    user_id: string
                }
                Insert: {
                    conversation_id: string
                    created_at?: string
                    id?: string
                    parts?: Json
                    role: string
                    user_id: string
                }
                Update: {
                    conversation_id?: string
                    created_at?: string
                    id?: string
                    parts?: Json
                    role?: string
                    user_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "messages_conversation_id_fkey"
                        columns: ["conversation_id"]
                        isOneToOne: false
                        referencedRelation: "conversations"
                        referencedColumns: ["id"]
                    },
                ]
            }
            profiles: {
                Row: {
                    avatar_url: string | null
                    created_at: string
                    display_name: string | null
                    email: string | null
                    id: string
                    updated_at: string
                }
                Insert: {
                    avatar_url?: string | null
                    created_at?: string
                    display_name?: string | null
                    email?: string | null
                    id: string
                    updated_at?: string
                }
                Update: {
                    avatar_url?: string | null
                    created_at?: string
                    display_name?: string | null
                    email?: string | null
                    id?: string
                    updated_at?: string
                }
                Relationships: []
            }
            user_moderation: {
                Row: {
                    id: string
                    user_id: string
                    warnings: number
                    is_banned: boolean
                    banned_until: string | null
                    last_warning_at: string | null
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    user_id: string
                    warnings?: number
                    is_banned?: boolean
                    banned_until?: string | null
                    last_warning_at?: string | null
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    warnings?: number
                    is_banned?: boolean
                    banned_until?: string | null
                    last_warning_at?: string | null
                    created_at?: string
                    updated_at?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "user_moderation_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: true
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            // ✅ NEW TABLES
            user_preferences: {
                Row: {
                    user_id: string
                    preferred_model: string | null
                    response_length: string | null
                    language: string | null
                    theme: string | null
                    updated_at: string
                }
                Insert: {
                    user_id: string
                    preferred_model?: string | null
                    response_length?: string | null
                    language?: string | null
                    theme?: string | null
                    updated_at?: string
                }
                Update: {
                    user_id?: string
                    preferred_model?: string | null
                    response_length?: string | null
                    language?: string | null
                    theme?: string | null
                    updated_at?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "user_preferences_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: true
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            user_activity: {
                Row: {
                    id: string
                    user_id: string
                    action: string
                    metadata: Json | null
                    timestamp: string
                }
                Insert: {
                    id?: string
                    user_id: string
                    action: string
                    metadata?: Json | null
                    timestamp?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    action?: string
                    metadata?: Json | null
                    timestamp?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "user_activity_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            user_achievements: {
                Row: {
                    id: string
                    user_id: string
                    achievement: string
                    earned_at: string
                }
                Insert: {
                    id?: string
                    user_id: string
                    achievement: string
                    earned_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    achievement?: string
                    earned_at?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "user_achievements_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            api_usage: {
                Row: {
                    id: string
                    user_id: string
                    endpoint: string
                    created_at: string
                }
                Insert: {
                    id?: string
                    user_id: string
                    endpoint: string
                    created_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    endpoint?: string
                    created_at?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "api_usage_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    }
                ]
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}

// ... rest of the types file (Tables, TablesInsert, TablesUpdate, etc.)