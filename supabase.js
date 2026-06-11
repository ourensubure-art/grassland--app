// ============================================
// Supabase 数据库连接配置（ES模块版）
// ============================================

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://jqubxwcjupapeaknfzpi.supabase.co';
const SUPABASE_KEY = 'sb_publishable_MndnE02o-5Q5xN7_rNyIhQ_1Ur7k8cq';

// 创建并导出客户端
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// 同时挂到 window，让老式页面也能用
window.supabaseClient = supabase;

console.log('✅ Supabase 已连接');