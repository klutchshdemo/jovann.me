import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const jovannTheme: CustomThemeConfig = {
	name: 'jovann-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': 'var(--color-secondary-500)',
		'--theme-font-color-dark': 'var(--color-tertiary-50)',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '2px',
		// =~= Theme On-X Colors =~=
		'--on-primary': 'var(--color-tertiary-50)',
		'--on-secondary': 'var(--color-primary-900)',
		'--on-tertiary': 'var(--color-primary-900)',
		'--on-success': 'var(--color-primary-900)',
		'--on-warning': 'var(--color-primary-900)',
		'--on-error': 'var(--color-primary-900)',
		'--on-surface': 'var(--color-tertiary-50)',
		// =~= Theme Colors  =~=
		// primary | #555555
		'--color-primary-50': '230 230 230', // #e6e6e6
		'--color-primary-100': '221 221 221', // #dddddd
		'--color-primary-200': '213 213 213', // #d5d5d5
		'--color-primary-300': '187 187 187', // #bbbbbb
		'--color-primary-400': '136 136 136', // #888888
		'--color-primary-500': '85 85 85', // #555555
		'--color-primary-600': '77 77 77', // #4d4d4d
		'--color-primary-700': '64 64 64', // #404040
		'--color-primary-800': '51 51 51', // #333333
		'--color-primary-900': '42 42 42', // #2a2a2a
		// secondary | #a3a3a3
		'--color-secondary-50': '241 241 241', // #f1f1f1
		'--color-secondary-100': '237 237 237', // #ededed
		'--color-secondary-200': '232 232 232', // #e8e8e8
		'--color-secondary-300': '218 218 218', // #dadada
		'--color-secondary-400': '191 191 191', // #bfbfbf
		'--color-secondary-500': '163 163 163', // #a3a3a3
		'--color-secondary-600': '147 147 147', // #939393
		'--color-secondary-700': '122 122 122', // #7a7a7a
		'--color-secondary-800': '98 98 98', // #626262
		'--color-secondary-900': '80 80 80', // #505050
		// tertiary | #dbd6cb
		'--color-tertiary-50': '250 249 247', // #faf9f7
		'--color-tertiary-100': '248 247 245', // #f8f7f5
		'--color-tertiary-200': '246 245 242', // #f6f5f2
		'--color-tertiary-300': '241 239 234', // #f1efea
		'--color-tertiary-400': '230 226 219', // #e6e2db
		'--color-tertiary-500': '219 214 203', // #dbd6cb
		'--color-tertiary-600': '197 193 183', // #c5c1b7
		'--color-tertiary-700': '164 161 152', // #a4a198
		'--color-tertiary-800': '131 128 122', // #83807a
		'--color-tertiary-900': '107 105 99', // #6b6963
		// success | #ae74fa
		'--color-success-50': '243 234 254', // #f3eafe
		'--color-success-100': '239 227 254', // #efe3fe
		'--color-success-200': '235 220 254', // #ebdcfe
		'--color-success-300': '223 199 253', // #dfc7fd
		'--color-success-400': '198 158 252', // #c69efc
		'--color-success-500': '174 116 250', // #ae74fa
		'--color-success-600': '157 104 225', // #9d68e1
		'--color-success-700': '131 87 188', // #8357bc
		'--color-success-800': '104 70 150', // #684696
		'--color-success-900': '85 57 123', // #55397b
		// warning | #fff833
		'--color-warning-50': '255 254 224', // #fffee0
		'--color-warning-100': '255 254 214', // #fffed6
		'--color-warning-200': '255 253 204', // #fffdcc
		'--color-warning-300': '255 252 173', // #fffcad
		'--color-warning-400': '255 250 112', // #fffa70
		'--color-warning-500': '255 248 51', // #fff833
		'--color-warning-600': '230 223 46', // #e6df2e
		'--color-warning-700': '191 186 38', // #bfba26
		'--color-warning-800': '153 149 31', // #99951f
		'--color-warning-900': '125 122 25', // #7d7a19
		// error | #ff5c5c
		'--color-error-50': '255 231 231', // #ffe7e7
		'--color-error-100': '255 222 222', // #ffdede
		'--color-error-200': '255 214 214', // #ffd6d6
		'--color-error-300': '255 190 190', // #ffbebe
		'--color-error-400': '255 141 141', // #ff8d8d
		'--color-error-500': '255 92 92', // #ff5c5c
		'--color-error-600': '230 83 83', // #e65353
		'--color-error-700': '191 69 69', // #bf4545
		'--color-error-800': '153 55 55', // #993737
		'--color-error-900': '125 45 45', // #7d2d2d
		// surface | #555555
		'--color-surface-50': '230 230 230', // #e6e6e6
		'--color-surface-100': '221 221 221', // #dddddd
		'--color-surface-200': '213 213 213', // #d5d5d5
		'--color-surface-300': '187 187 187', // #bbbbbb
		'--color-surface-400': '136 136 136', // #888888
		'--color-surface-500': '85 85 85', // #555555
		'--color-surface-600': '77 77 77', // #4d4d4d
		'--color-surface-700': '64 64 64', // #404040
		'--color-surface-800': '51 51 51', // #333333
		'--color-surface-900': '42 42 42' // #2a2a2a
	}
};
