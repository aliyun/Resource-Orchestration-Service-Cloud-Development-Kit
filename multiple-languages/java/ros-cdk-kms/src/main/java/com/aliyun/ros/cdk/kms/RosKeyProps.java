package com.aliyun.ros.cdk.kms;

/**
 * Properties for defining a <code>RosKey</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-key
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:26.723Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kms.$Module.class, fqn = "@alicloud/ros-cdk-kms.RosKeyProps")
@software.amazon.jsii.Jsii.Proxy(RosKeyProps.Jsii$Proxy.class)
public interface RosKeyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionProtection() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDkmsInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAutomaticRotation() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeySpec() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyUsage() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPendingWindowInDays() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPolicy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProtectionLevel() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRotationInterval() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosKeyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosKeyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosKeyProps> {
        java.lang.Object deletionProtection;
        java.lang.Object description;
        java.lang.Object dkmsInstanceId;
        java.lang.Object enable;
        java.lang.Object enableAutomaticRotation;
        java.lang.Object keySpec;
        java.lang.Object keyUsage;
        java.lang.Object pendingWindowInDays;
        java.lang.Object policy;
        java.lang.Object protectionLevel;
        java.lang.Object rotationInterval;

        /**
         * Sets the value of {@link RosKeyProps#getDeletionProtection}
         * @param deletionProtection the value to be set.
         * @return {@code this}
         */
        public Builder deletionProtection(java.lang.Boolean deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyProps#getDeletionProtection}
         * @param deletionProtection the value to be set.
         * @return {@code this}
         */
        public Builder deletionProtection(com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyProps#getDkmsInstanceId}
         * @param dkmsInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder dkmsInstanceId(java.lang.String dkmsInstanceId) {
            this.dkmsInstanceId = dkmsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyProps#getDkmsInstanceId}
         * @param dkmsInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder dkmsInstanceId(com.aliyun.ros.cdk.core.IResolvable dkmsInstanceId) {
            this.dkmsInstanceId = dkmsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyProps#getEnable}
         * @param enable the value to be set.
         * @return {@code this}
         */
        public Builder enable(java.lang.Boolean enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyProps#getEnable}
         * @param enable the value to be set.
         * @return {@code this}
         */
        public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyProps#getEnableAutomaticRotation}
         * @param enableAutomaticRotation the value to be set.
         * @return {@code this}
         */
        public Builder enableAutomaticRotation(java.lang.Boolean enableAutomaticRotation) {
            this.enableAutomaticRotation = enableAutomaticRotation;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyProps#getEnableAutomaticRotation}
         * @param enableAutomaticRotation the value to be set.
         * @return {@code this}
         */
        public Builder enableAutomaticRotation(com.aliyun.ros.cdk.core.IResolvable enableAutomaticRotation) {
            this.enableAutomaticRotation = enableAutomaticRotation;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyProps#getKeySpec}
         * @param keySpec the value to be set.
         * @return {@code this}
         */
        public Builder keySpec(java.lang.String keySpec) {
            this.keySpec = keySpec;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyProps#getKeySpec}
         * @param keySpec the value to be set.
         * @return {@code this}
         */
        public Builder keySpec(com.aliyun.ros.cdk.core.IResolvable keySpec) {
            this.keySpec = keySpec;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyProps#getKeyUsage}
         * @param keyUsage the value to be set.
         * @return {@code this}
         */
        public Builder keyUsage(java.lang.String keyUsage) {
            this.keyUsage = keyUsage;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyProps#getKeyUsage}
         * @param keyUsage the value to be set.
         * @return {@code this}
         */
        public Builder keyUsage(com.aliyun.ros.cdk.core.IResolvable keyUsage) {
            this.keyUsage = keyUsage;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyProps#getPendingWindowInDays}
         * @param pendingWindowInDays the value to be set.
         * @return {@code this}
         */
        public Builder pendingWindowInDays(java.lang.Number pendingWindowInDays) {
            this.pendingWindowInDays = pendingWindowInDays;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyProps#getPendingWindowInDays}
         * @param pendingWindowInDays the value to be set.
         * @return {@code this}
         */
        public Builder pendingWindowInDays(com.aliyun.ros.cdk.core.IResolvable pendingWindowInDays) {
            this.pendingWindowInDays = pendingWindowInDays;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyProps#getPolicy}
         * @param policy the value to be set.
         * @return {@code this}
         */
        public Builder policy(com.aliyun.ros.cdk.core.IResolvable policy) {
            this.policy = policy;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyProps#getPolicy}
         * @param policy the value to be set.
         * @return {@code this}
         */
        public Builder policy(java.util.Map<java.lang.String, ? extends java.lang.Object> policy) {
            this.policy = policy;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyProps#getProtectionLevel}
         * @param protectionLevel the value to be set.
         * @return {@code this}
         */
        public Builder protectionLevel(java.lang.String protectionLevel) {
            this.protectionLevel = protectionLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyProps#getProtectionLevel}
         * @param protectionLevel the value to be set.
         * @return {@code this}
         */
        public Builder protectionLevel(com.aliyun.ros.cdk.core.IResolvable protectionLevel) {
            this.protectionLevel = protectionLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyProps#getRotationInterval}
         * @param rotationInterval the value to be set.
         * @return {@code this}
         */
        public Builder rotationInterval(java.lang.String rotationInterval) {
            this.rotationInterval = rotationInterval;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyProps#getRotationInterval}
         * @param rotationInterval the value to be set.
         * @return {@code this}
         */
        public Builder rotationInterval(com.aliyun.ros.cdk.core.IResolvable rotationInterval) {
            this.rotationInterval = rotationInterval;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosKeyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosKeyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosKeyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosKeyProps {
        private final java.lang.Object deletionProtection;
        private final java.lang.Object description;
        private final java.lang.Object dkmsInstanceId;
        private final java.lang.Object enable;
        private final java.lang.Object enableAutomaticRotation;
        private final java.lang.Object keySpec;
        private final java.lang.Object keyUsage;
        private final java.lang.Object pendingWindowInDays;
        private final java.lang.Object policy;
        private final java.lang.Object protectionLevel;
        private final java.lang.Object rotationInterval;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.deletionProtection = software.amazon.jsii.Kernel.get(this, "deletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dkmsInstanceId = software.amazon.jsii.Kernel.get(this, "dkmsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableAutomaticRotation = software.amazon.jsii.Kernel.get(this, "enableAutomaticRotation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keySpec = software.amazon.jsii.Kernel.get(this, "keySpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyUsage = software.amazon.jsii.Kernel.get(this, "keyUsage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pendingWindowInDays = software.amazon.jsii.Kernel.get(this, "pendingWindowInDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policy = software.amazon.jsii.Kernel.get(this, "policy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protectionLevel = software.amazon.jsii.Kernel.get(this, "protectionLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rotationInterval = software.amazon.jsii.Kernel.get(this, "rotationInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.deletionProtection = builder.deletionProtection;
            this.description = builder.description;
            this.dkmsInstanceId = builder.dkmsInstanceId;
            this.enable = builder.enable;
            this.enableAutomaticRotation = builder.enableAutomaticRotation;
            this.keySpec = builder.keySpec;
            this.keyUsage = builder.keyUsage;
            this.pendingWindowInDays = builder.pendingWindowInDays;
            this.policy = builder.policy;
            this.protectionLevel = builder.protectionLevel;
            this.rotationInterval = builder.rotationInterval;
        }

        @Override
        public final java.lang.Object getDeletionProtection() {
            return this.deletionProtection;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDkmsInstanceId() {
            return this.dkmsInstanceId;
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
        public final java.lang.Object getPolicy() {
            return this.policy;
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

            if (this.getDeletionProtection() != null) {
                data.set("deletionProtection", om.valueToTree(this.getDeletionProtection()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDkmsInstanceId() != null) {
                data.set("dkmsInstanceId", om.valueToTree(this.getDkmsInstanceId()));
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
            if (this.getPolicy() != null) {
                data.set("policy", om.valueToTree(this.getPolicy()));
            }
            if (this.getProtectionLevel() != null) {
                data.set("protectionLevel", om.valueToTree(this.getProtectionLevel()));
            }
            if (this.getRotationInterval() != null) {
                data.set("rotationInterval", om.valueToTree(this.getRotationInterval()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-kms.RosKeyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosKeyProps.Jsii$Proxy that = (RosKeyProps.Jsii$Proxy) o;

            if (this.deletionProtection != null ? !this.deletionProtection.equals(that.deletionProtection) : that.deletionProtection != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.dkmsInstanceId != null ? !this.dkmsInstanceId.equals(that.dkmsInstanceId) : that.dkmsInstanceId != null) return false;
            if (this.enable != null ? !this.enable.equals(that.enable) : that.enable != null) return false;
            if (this.enableAutomaticRotation != null ? !this.enableAutomaticRotation.equals(that.enableAutomaticRotation) : that.enableAutomaticRotation != null) return false;
            if (this.keySpec != null ? !this.keySpec.equals(that.keySpec) : that.keySpec != null) return false;
            if (this.keyUsage != null ? !this.keyUsage.equals(that.keyUsage) : that.keyUsage != null) return false;
            if (this.pendingWindowInDays != null ? !this.pendingWindowInDays.equals(that.pendingWindowInDays) : that.pendingWindowInDays != null) return false;
            if (this.policy != null ? !this.policy.equals(that.policy) : that.policy != null) return false;
            if (this.protectionLevel != null ? !this.protectionLevel.equals(that.protectionLevel) : that.protectionLevel != null) return false;
            return this.rotationInterval != null ? this.rotationInterval.equals(that.rotationInterval) : that.rotationInterval == null;
        }

        @Override
        public final int hashCode() {
            int result = this.deletionProtection != null ? this.deletionProtection.hashCode() : 0;
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.dkmsInstanceId != null ? this.dkmsInstanceId.hashCode() : 0);
            result = 31 * result + (this.enable != null ? this.enable.hashCode() : 0);
            result = 31 * result + (this.enableAutomaticRotation != null ? this.enableAutomaticRotation.hashCode() : 0);
            result = 31 * result + (this.keySpec != null ? this.keySpec.hashCode() : 0);
            result = 31 * result + (this.keyUsage != null ? this.keyUsage.hashCode() : 0);
            result = 31 * result + (this.pendingWindowInDays != null ? this.pendingWindowInDays.hashCode() : 0);
            result = 31 * result + (this.policy != null ? this.policy.hashCode() : 0);
            result = 31 * result + (this.protectionLevel != null ? this.protectionLevel.hashCode() : 0);
            result = 31 * result + (this.rotationInterval != null ? this.rotationInterval.hashCode() : 0);
            return result;
        }
    }
}
