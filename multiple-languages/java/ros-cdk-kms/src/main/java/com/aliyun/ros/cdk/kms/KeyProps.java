package com.aliyun.ros.cdk.kms;

/**
 * Properties for defining a `ALIYUN::KMS::Key`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.669Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kms.$Module.class, fqn = "@alicloud/ros-cdk-kms.KeyProps")
@software.amazon.jsii.Jsii.Proxy(KeyProps.Jsii$Proxy.class)
public interface KeyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property description: The description of the CMK.
     * <p>
     * Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property enable: Specifies whether the key is enabled.
     * <p>
     * Defaults to true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnable() {
        return null;
    }

    /**
     * Property enableAutomaticRotation: Whether to enable automatic key rotation.
     * <p>
     * Valid value: true/false (default)
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAutomaticRotation() {
        return null;
    }

    /**
     * Property keySpec: Key type.
     * <p>
     * Valid value: Aliyun_AES_256/Aliyun_SM4/RSA_2048/EC_P256/EC_P256K/EC_SM2
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeySpec() {
        return null;
    }

    /**
     * Property keyUsage: The intended use of the CMK.
     * <p>
     * Default value: ENCRYPT/DECRYPT.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyUsage() {
        return null;
    }

    /**
     * Property pendingWindowInDays: The waiting period, specified in number of days.
     * <p>
     * During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 30. Default value is 30.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPendingWindowInDays() {
        return null;
    }

    /**
     * Property protectionLevel: The protection level of the CMK to create.
     * <p>
     * Valid value: SOFTWARE and HSM. When this parameter is set to HSM:
     * If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM.
     * If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProtectionLevel() {
        return null;
    }

    /**
     * Property rotationInterval: The time period for automatic rotation.
     * <p>
     * The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRotationInterval() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link KeyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link KeyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<KeyProps> {
        private java.lang.Object description;
        private java.lang.Object enable;
        private java.lang.Object enableAutomaticRotation;
        private java.lang.Object keySpec;
        private java.lang.Object keyUsage;
        private java.lang.Object pendingWindowInDays;
        private java.lang.Object protectionLevel;
        private java.lang.Object rotationInterval;

        /**
         * Sets the value of {@link KeyProps#getDescription}
         * @param description Property description: The description of the CMK.
         *                    Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link KeyProps#getDescription}
         * @param description Property description: The description of the CMK.
         *                    Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link KeyProps#getEnable}
         * @param enable Property enable: Specifies whether the key is enabled.
         *               Defaults to true.
         * @return {@code this}
         */
        public Builder enable(java.lang.Boolean enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Sets the value of {@link KeyProps#getEnable}
         * @param enable Property enable: Specifies whether the key is enabled.
         *               Defaults to true.
         * @return {@code this}
         */
        public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Sets the value of {@link KeyProps#getEnableAutomaticRotation}
         * @param enableAutomaticRotation Property enableAutomaticRotation: Whether to enable automatic key rotation.
         *                                Valid value: true/false (default)
         * @return {@code this}
         */
        public Builder enableAutomaticRotation(java.lang.Boolean enableAutomaticRotation) {
            this.enableAutomaticRotation = enableAutomaticRotation;
            return this;
        }

        /**
         * Sets the value of {@link KeyProps#getEnableAutomaticRotation}
         * @param enableAutomaticRotation Property enableAutomaticRotation: Whether to enable automatic key rotation.
         *                                Valid value: true/false (default)
         * @return {@code this}
         */
        public Builder enableAutomaticRotation(com.aliyun.ros.cdk.core.IResolvable enableAutomaticRotation) {
            this.enableAutomaticRotation = enableAutomaticRotation;
            return this;
        }

        /**
         * Sets the value of {@link KeyProps#getKeySpec}
         * @param keySpec Property keySpec: Key type.
         *                Valid value: Aliyun_AES_256/Aliyun_SM4/RSA_2048/EC_P256/EC_P256K/EC_SM2
         * @return {@code this}
         */
        public Builder keySpec(java.lang.String keySpec) {
            this.keySpec = keySpec;
            return this;
        }

        /**
         * Sets the value of {@link KeyProps#getKeySpec}
         * @param keySpec Property keySpec: Key type.
         *                Valid value: Aliyun_AES_256/Aliyun_SM4/RSA_2048/EC_P256/EC_P256K/EC_SM2
         * @return {@code this}
         */
        public Builder keySpec(com.aliyun.ros.cdk.core.IResolvable keySpec) {
            this.keySpec = keySpec;
            return this;
        }

        /**
         * Sets the value of {@link KeyProps#getKeyUsage}
         * @param keyUsage Property keyUsage: The intended use of the CMK.
         *                 Default value: ENCRYPT/DECRYPT.
         * @return {@code this}
         */
        public Builder keyUsage(java.lang.String keyUsage) {
            this.keyUsage = keyUsage;
            return this;
        }

        /**
         * Sets the value of {@link KeyProps#getKeyUsage}
         * @param keyUsage Property keyUsage: The intended use of the CMK.
         *                 Default value: ENCRYPT/DECRYPT.
         * @return {@code this}
         */
        public Builder keyUsage(com.aliyun.ros.cdk.core.IResolvable keyUsage) {
            this.keyUsage = keyUsage;
            return this;
        }

        /**
         * Sets the value of {@link KeyProps#getPendingWindowInDays}
         * @param pendingWindowInDays Property pendingWindowInDays: The waiting period, specified in number of days.
         *                            During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 30. Default value is 30.
         * @return {@code this}
         */
        public Builder pendingWindowInDays(java.lang.Number pendingWindowInDays) {
            this.pendingWindowInDays = pendingWindowInDays;
            return this;
        }

        /**
         * Sets the value of {@link KeyProps#getPendingWindowInDays}
         * @param pendingWindowInDays Property pendingWindowInDays: The waiting period, specified in number of days.
         *                            During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 30. Default value is 30.
         * @return {@code this}
         */
        public Builder pendingWindowInDays(com.aliyun.ros.cdk.core.IResolvable pendingWindowInDays) {
            this.pendingWindowInDays = pendingWindowInDays;
            return this;
        }

        /**
         * Sets the value of {@link KeyProps#getProtectionLevel}
         * @param protectionLevel Property protectionLevel: The protection level of the CMK to create.
         *                        Valid value: SOFTWARE and HSM. When this parameter is set to HSM:
         *                        If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM.
         *                        If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
         * @return {@code this}
         */
        public Builder protectionLevel(java.lang.String protectionLevel) {
            this.protectionLevel = protectionLevel;
            return this;
        }

        /**
         * Sets the value of {@link KeyProps#getProtectionLevel}
         * @param protectionLevel Property protectionLevel: The protection level of the CMK to create.
         *                        Valid value: SOFTWARE and HSM. When this parameter is set to HSM:
         *                        If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM.
         *                        If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
         * @return {@code this}
         */
        public Builder protectionLevel(com.aliyun.ros.cdk.core.IResolvable protectionLevel) {
            this.protectionLevel = protectionLevel;
            return this;
        }

        /**
         * Sets the value of {@link KeyProps#getRotationInterval}
         * @param rotationInterval Property rotationInterval: The time period for automatic rotation.
         *                         The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
         * @return {@code this}
         */
        public Builder rotationInterval(java.lang.String rotationInterval) {
            this.rotationInterval = rotationInterval;
            return this;
        }

        /**
         * Sets the value of {@link KeyProps#getRotationInterval}
         * @param rotationInterval Property rotationInterval: The time period for automatic rotation.
         *                         The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
         * @return {@code this}
         */
        public Builder rotationInterval(com.aliyun.ros.cdk.core.IResolvable rotationInterval) {
            this.rotationInterval = rotationInterval;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link KeyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public KeyProps build() {
            return new Jsii$Proxy(description, enable, enableAutomaticRotation, keySpec, keyUsage, pendingWindowInDays, protectionLevel, rotationInterval);
        }
    }

    /**
     * An implementation for {@link KeyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements KeyProps {
        private final java.lang.Object description;
        private final java.lang.Object enable;
        private final java.lang.Object enableAutomaticRotation;
        private final java.lang.Object keySpec;
        private final java.lang.Object keyUsage;
        private final java.lang.Object pendingWindowInDays;
        private final java.lang.Object protectionLevel;
        private final java.lang.Object rotationInterval;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableAutomaticRotation = software.amazon.jsii.Kernel.get(this, "enableAutomaticRotation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keySpec = software.amazon.jsii.Kernel.get(this, "keySpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyUsage = software.amazon.jsii.Kernel.get(this, "keyUsage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pendingWindowInDays = software.amazon.jsii.Kernel.get(this, "pendingWindowInDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protectionLevel = software.amazon.jsii.Kernel.get(this, "protectionLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rotationInterval = software.amazon.jsii.Kernel.get(this, "rotationInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object description, final java.lang.Object enable, final java.lang.Object enableAutomaticRotation, final java.lang.Object keySpec, final java.lang.Object keyUsage, final java.lang.Object pendingWindowInDays, final java.lang.Object protectionLevel, final java.lang.Object rotationInterval) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.description = description;
            this.enable = enable;
            this.enableAutomaticRotation = enableAutomaticRotation;
            this.keySpec = keySpec;
            this.keyUsage = keyUsage;
            this.pendingWindowInDays = pendingWindowInDays;
            this.protectionLevel = protectionLevel;
            this.rotationInterval = rotationInterval;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEnable() {
            return this.enable;
        }

        @Override
        public final java.lang.Object getEnableAutomaticRotation() {
            return this.enableAutomaticRotation;
        }

        @Override
        public final java.lang.Object getKeySpec() {
            return this.keySpec;
        }

        @Override
        public final java.lang.Object getKeyUsage() {
            return this.keyUsage;
        }

        @Override
        public final java.lang.Object getPendingWindowInDays() {
            return this.pendingWindowInDays;
        }

        @Override
        public final java.lang.Object getProtectionLevel() {
            return this.protectionLevel;
        }

        @Override
        public final java.lang.Object getRotationInterval() {
            return this.rotationInterval;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEnable() != null) {
                data.set("enable", om.valueToTree(this.getEnable()));
            }
            if (this.getEnableAutomaticRotation() != null) {
                data.set("enableAutomaticRotation", om.valueToTree(this.getEnableAutomaticRotation()));
            }
            if (this.getKeySpec() != null) {
                data.set("keySpec", om.valueToTree(this.getKeySpec()));
            }
            if (this.getKeyUsage() != null) {
                data.set("keyUsage", om.valueToTree(this.getKeyUsage()));
            }
            if (this.getPendingWindowInDays() != null) {
                data.set("pendingWindowInDays", om.valueToTree(this.getPendingWindowInDays()));
            }
            if (this.getProtectionLevel() != null) {
                data.set("protectionLevel", om.valueToTree(this.getProtectionLevel()));
            }
            if (this.getRotationInterval() != null) {
                data.set("rotationInterval", om.valueToTree(this.getRotationInterval()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-kms.KeyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            KeyProps.Jsii$Proxy that = (KeyProps.Jsii$Proxy) o;

            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.enable != null ? !this.enable.equals(that.enable) : that.enable != null) return false;
            if (this.enableAutomaticRotation != null ? !this.enableAutomaticRotation.equals(that.enableAutomaticRotation) : that.enableAutomaticRotation != null) return false;
            if (this.keySpec != null ? !this.keySpec.equals(that.keySpec) : that.keySpec != null) return false;
            if (this.keyUsage != null ? !this.keyUsage.equals(that.keyUsage) : that.keyUsage != null) return false;
            if (this.pendingWindowInDays != null ? !this.pendingWindowInDays.equals(that.pendingWindowInDays) : that.pendingWindowInDays != null) return false;
            if (this.protectionLevel != null ? !this.protectionLevel.equals(that.protectionLevel) : that.protectionLevel != null) return false;
            return this.rotationInterval != null ? this.rotationInterval.equals(that.rotationInterval) : that.rotationInterval == null;
        }

        @Override
        public final int hashCode() {
            int result = this.description != null ? this.description.hashCode() : 0;
            result = 31 * result + (this.enable != null ? this.enable.hashCode() : 0);
            result = 31 * result + (this.enableAutomaticRotation != null ? this.enableAutomaticRotation.hashCode() : 0);
            result = 31 * result + (this.keySpec != null ? this.keySpec.hashCode() : 0);
            result = 31 * result + (this.keyUsage != null ? this.keyUsage.hashCode() : 0);
            result = 31 * result + (this.pendingWindowInDays != null ? this.pendingWindowInDays.hashCode() : 0);
            result = 31 * result + (this.protectionLevel != null ? this.protectionLevel.hashCode() : 0);
            result = 31 * result + (this.rotationInterval != null ? this.rotationInterval.hashCode() : 0);
            return result;
        }
    }
}
