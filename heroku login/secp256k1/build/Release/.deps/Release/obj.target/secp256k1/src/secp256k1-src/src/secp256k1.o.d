cmd_Release/obj.target/secp256k1/src/secp256k1-src/src/secp256k1.o := cc '-DNODE_GYP_MODULE_NAME=secp256k1' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-D__STDC_FORMAT_MACROS' '-DOPENSSL_NO_PINSHARED' '-DOPENSSL_THREADS' '-DENABLE_MODULE_ECDH=1' '-DENABLE_MODULE_RECOVERY=1' '-DUSE_NUM_NONE=1' '-DUSE_FIELD_INV_BUILTIN=1' '-DUSE_SCALAR_INV_BUILTIN=1' '-DHAVE___INT128=1' '-DUSE_ASM_X86_64=1' '-DUSE_FIELD_5X52=1' '-DUSE_FIELD_5X52_INT128=1' '-DUSE_SCALAR_4X64=1' '-DBUILDING_NODE_EXTENSION' -I/home/anonymous/.cache/node-gyp/14.18.1/include/node -I/home/anonymous/.cache/node-gyp/14.18.1/src -I/home/anonymous/.cache/node-gyp/14.18.1/deps/openssl/config -I/home/anonymous/.cache/node-gyp/14.18.1/deps/openssl/openssl/include -I/home/anonymous/.cache/node-gyp/14.18.1/deps/uv/include -I/home/anonymous/.cache/node-gyp/14.18.1/deps/zlib -I/home/anonymous/.cache/node-gyp/14.18.1/deps/v8/include -I../src/secp256k1-src -I../src/secp256k1-src/contrib -I../src/secp256k1-src/include -I../src/secp256k1-src/src -I../../nan -I/usr/local/include  -fPIC -pthread -Wall -Wextra -Wno-unused-parameter -m64 -Wall -Wno-maybe-uninitialized -Wno-nonnull-compare -Wno-uninitialized -Wno-unused-function -Wextra -O3 -fno-omit-frame-pointer  -MMD -MF ./Release/.deps/Release/obj.target/secp256k1/src/secp256k1-src/src/secp256k1.o.d.raw   -c -o Release/obj.target/secp256k1/src/secp256k1-src/src/secp256k1.o ../src/secp256k1-src/src/secp256k1.c
Release/obj.target/secp256k1/src/secp256k1-src/src/secp256k1.o: \
 ../src/secp256k1-src/src/secp256k1.c \
 ../src/secp256k1-src/include/secp256k1.h ../src/secp256k1-src/src/util.h \
 ../src/secp256k1-src/src/num_impl.h ../src/secp256k1-src/src/num.h \
 ../src/secp256k1-src/src/field_impl.h \
 ../src/secp256k1-src/src/field_5x52_impl.h \
 ../src/secp256k1-src/src/field.h ../src/secp256k1-src/src/field_5x52.h \
 ../src/secp256k1-src/src/field_5x52_asm_impl.h \
 ../src/secp256k1-src/src/scalar_impl.h ../src/secp256k1-src/src/group.h \
 ../src/secp256k1-src/src/scalar.h ../src/secp256k1-src/src/scalar_4x64.h \
 ../src/secp256k1-src/src/scalar_4x64_impl.h \
 ../src/secp256k1-src/src/group_impl.h \
 ../src/secp256k1-src/src/ecmult_impl.h ../src/secp256k1-src/src/ecmult.h \
 ../src/secp256k1-src/src/scratch.h \
 ../src/secp256k1-src/src/ecmult_const_impl.h \
 ../src/secp256k1-src/src/ecmult_const.h \
 ../src/secp256k1-src/src/ecmult_gen_impl.h \
 ../src/secp256k1-src/src/ecmult_gen.h \
 ../src/secp256k1-src/src/hash_impl.h ../src/secp256k1-src/src/hash.h \
 ../src/secp256k1-src/src/ecdsa_impl.h ../src/secp256k1-src/src/ecdsa.h \
 ../src/secp256k1-src/src/eckey_impl.h ../src/secp256k1-src/src/eckey.h \
 ../src/secp256k1-src/src/scratch_impl.h \
 ../src/secp256k1-src/src/modules/ecdh/main_impl.h \
 ../src/secp256k1-src/include/secp256k1_ecdh.h \
 ../src/secp256k1-src/include/secp256k1.h \
 ../src/secp256k1-src/src/ecmult_const_impl.h \
 ../src/secp256k1-src/src/modules/recovery/main_impl.h \
 ../src/secp256k1-src/include/secp256k1_recovery.h
../src/secp256k1-src/src/secp256k1.c:
../src/secp256k1-src/include/secp256k1.h:
../src/secp256k1-src/src/util.h:
../src/secp256k1-src/src/num_impl.h:
../src/secp256k1-src/src/num.h:
../src/secp256k1-src/src/field_impl.h:
../src/secp256k1-src/src/field_5x52_impl.h:
../src/secp256k1-src/src/field.h:
../src/secp256k1-src/src/field_5x52.h:
../src/secp256k1-src/src/field_5x52_asm_impl.h:
../src/secp256k1-src/src/scalar_impl.h:
../src/secp256k1-src/src/group.h:
../src/secp256k1-src/src/scalar.h:
../src/secp256k1-src/src/scalar_4x64.h:
../src/secp256k1-src/src/scalar_4x64_impl.h:
../src/secp256k1-src/src/group_impl.h:
../src/secp256k1-src/src/ecmult_impl.h:
../src/secp256k1-src/src/ecmult.h:
../src/secp256k1-src/src/scratch.h:
../src/secp256k1-src/src/ecmult_const_impl.h:
../src/secp256k1-src/src/ecmult_const.h:
../src/secp256k1-src/src/ecmult_gen_impl.h:
../src/secp256k1-src/src/ecmult_gen.h:
../src/secp256k1-src/src/hash_impl.h:
../src/secp256k1-src/src/hash.h:
../src/secp256k1-src/src/ecdsa_impl.h:
../src/secp256k1-src/src/ecdsa.h:
../src/secp256k1-src/src/eckey_impl.h:
../src/secp256k1-src/src/eckey.h:
../src/secp256k1-src/src/scratch_impl.h:
../src/secp256k1-src/src/modules/ecdh/main_impl.h:
../src/secp256k1-src/include/secp256k1_ecdh.h:
../src/secp256k1-src/include/secp256k1.h:
../src/secp256k1-src/src/ecmult_const_impl.h:
../src/secp256k1-src/src/modules/recovery/main_impl.h:
../src/secp256k1-src/include/secp256k1_recovery.h:
