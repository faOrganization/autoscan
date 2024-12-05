export const login = {
    email: {
        isEmail: 'E-poçt düzgün daxil edilməyib',
        required: 'E-poçt daxil edilməyib',
    },
    password: {
        required: 'Şifrə daxil edilməyib',
        minLength: 'Minimum 8 simvoldan ibarət olmalıdır',
        isSymbol: 'Şifrənin tərkibində minimum 1 rəqəm olmalıdır'
    }
}

export const register = {
    email: {
        required: 'E-poçt daxil edilməyib',
        isEmail: 'E-poçt düzgün daxil edilməyib',
    },
    password: {
        required: 'Şifrə daxil edilməyib',
        minLength: 'Minimum 8 simvoldan ibarət olmalıdır',
        isSymbol: 'Şifrənin tərkibində minimum 1 rəqəm olmalıdır'
    },
    confirmPassword: {
        required: 'Şifrə daxil edilməyib',
        isSame: 'Şifrələr eyni olmalıdır',
        minLength: 'Minimum 8 simvoldan ibarət olmalıdır',
        isSymbol: 'Şifrənin tərkibində minimum 1 rəqəm olmalıdır'
    },
    terms: {
        isCheck: 'Istifadə şərtləri və Gizlilik siaysəti qəbul edilməyib'
    }
}

export const updatePwd = {
    password: {
        required: 'Şifrə daxil edilməyib',
        minLength: 'Minimum 8 simvoldan ibarət olmalıdır',
        isSymbol: 'Şifrənin tərkibində minimum 1 rəqəm olmalıdır'
    },
    confirmPassword: {
        required: 'Şifrə daxil edilməyib',
        isSame: 'Şifrələr eyni olmalıdır',
        minLength: 'Minimum 8 simvoldan ibarət olmalıdır',
        isSymbol: 'Şifrənin tərkibində minimum 1 rəqəm olmalıdır'
    }
}

export const resetPwdEmail = {
    email: {
        required: 'E-poçt daxil edilməyib',
        isEmail: 'E-poçt düzgün daxil edilməyib',
    }
}