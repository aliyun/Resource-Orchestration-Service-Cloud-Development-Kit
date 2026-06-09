package com.aliyun.ros.cdk.bastionhost;

/**
 * Properties for defining a <code>RosPasswordTask</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtask
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:35:53.536Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bastionhost.$Module.class, fqn = "@alicloud/ros-cdk-bastionhost.RosPasswordTaskProps")
@software.amazon.jsii.Jsii.Proxy(RosPasswordTaskProps.Jsii$Proxy.class)
public interface RosPasswordTaskProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTaskScheduleType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getComment() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCredentialType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPairGenerateConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPasswordGenerateConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPasswordGenerateType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTaskScheduleConfig() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosPasswordTaskProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosPasswordTaskProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosPasswordTaskProps> {
        java.lang.Object instanceId;
        java.lang.Object name;
        java.lang.Object taskScheduleType;
        java.lang.Object comment;
        java.lang.Object credentialType;
        java.lang.Object keyPairGenerateConfig;
        java.lang.Object passwordGenerateConfig;
        java.lang.Object passwordGenerateType;
        java.lang.Object taskScheduleConfig;

        /**
         * Sets the value of {@link RosPasswordTaskProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosPasswordTaskProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosPasswordTaskProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosPasswordTaskProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosPasswordTaskProps#getTaskScheduleType}
         * @param taskScheduleType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder taskScheduleType(java.lang.String taskScheduleType) {
            this.taskScheduleType = taskScheduleType;
            return this;
        }

        /**
         * Sets the value of {@link RosPasswordTaskProps#getTaskScheduleType}
         * @param taskScheduleType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder taskScheduleType(com.aliyun.ros.cdk.core.IResolvable taskScheduleType) {
            this.taskScheduleType = taskScheduleType;
            return this;
        }

        /**
         * Sets the value of {@link RosPasswordTaskProps#getComment}
         * @param comment the value to be set.
         * @return {@code this}
         */
        public Builder comment(java.lang.String comment) {
            this.comment = comment;
            return this;
        }

        /**
         * Sets the value of {@link RosPasswordTaskProps#getComment}
         * @param comment the value to be set.
         * @return {@code this}
         */
        public Builder comment(com.aliyun.ros.cdk.core.IResolvable comment) {
            this.comment = comment;
            return this;
        }

        /**
         * Sets the value of {@link RosPasswordTaskProps#getCredentialType}
         * @param credentialType the value to be set.
         * @return {@code this}
         */
        public Builder credentialType(java.lang.String credentialType) {
            this.credentialType = credentialType;
            return this;
        }

        /**
         * Sets the value of {@link RosPasswordTaskProps#getCredentialType}
         * @param credentialType the value to be set.
         * @return {@code this}
         */
        public Builder credentialType(com.aliyun.ros.cdk.core.IResolvable credentialType) {
            this.credentialType = credentialType;
            return this;
        }

        /**
         * Sets the value of {@link RosPasswordTaskProps#getKeyPairGenerateConfig}
         * @param keyPairGenerateConfig the value to be set.
         * @return {@code this}
         */
        public Builder keyPairGenerateConfig(java.lang.String keyPairGenerateConfig) {
            this.keyPairGenerateConfig = keyPairGenerateConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosPasswordTaskProps#getKeyPairGenerateConfig}
         * @param keyPairGenerateConfig the value to be set.
         * @return {@code this}
         */
        public Builder keyPairGenerateConfig(com.aliyun.ros.cdk.core.IResolvable keyPairGenerateConfig) {
            this.keyPairGenerateConfig = keyPairGenerateConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosPasswordTaskProps#getPasswordGenerateConfig}
         * @param passwordGenerateConfig the value to be set.
         * @return {@code this}
         */
        public Builder passwordGenerateConfig(com.aliyun.ros.cdk.core.IResolvable passwordGenerateConfig) {
            this.passwordGenerateConfig = passwordGenerateConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosPasswordTaskProps#getPasswordGenerateConfig}
         * @param passwordGenerateConfig the value to be set.
         * @return {@code this}
         */
        public Builder passwordGenerateConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> passwordGenerateConfig) {
            this.passwordGenerateConfig = passwordGenerateConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosPasswordTaskProps#getPasswordGenerateType}
         * @param passwordGenerateType the value to be set.
         * @return {@code this}
         */
        public Builder passwordGenerateType(java.lang.String passwordGenerateType) {
            this.passwordGenerateType = passwordGenerateType;
            return this;
        }

        /**
         * Sets the value of {@link RosPasswordTaskProps#getPasswordGenerateType}
         * @param passwordGenerateType the value to be set.
         * @return {@code this}
         */
        public Builder passwordGenerateType(com.aliyun.ros.cdk.core.IResolvable passwordGenerateType) {
            this.passwordGenerateType = passwordGenerateType;
            return this;
        }

        /**
         * Sets the value of {@link RosPasswordTaskProps#getTaskScheduleConfig}
         * @param taskScheduleConfig the value to be set.
         * @return {@code this}
         */
        public Builder taskScheduleConfig(com.aliyun.ros.cdk.core.IResolvable taskScheduleConfig) {
            this.taskScheduleConfig = taskScheduleConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosPasswordTaskProps#getTaskScheduleConfig}
         * @param taskScheduleConfig the value to be set.
         * @return {@code this}
         */
        public Builder taskScheduleConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> taskScheduleConfig) {
            this.taskScheduleConfig = taskScheduleConfig;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosPasswordTaskProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosPasswordTaskProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosPasswordTaskProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosPasswordTaskProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object name;
        private final java.lang.Object taskScheduleType;
        private final java.lang.Object comment;
        private final java.lang.Object credentialType;
        private final java.lang.Object keyPairGenerateConfig;
        private final java.lang.Object passwordGenerateConfig;
        private final java.lang.Object passwordGenerateType;
        private final java.lang.Object taskScheduleConfig;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.taskScheduleType = software.amazon.jsii.Kernel.get(this, "taskScheduleType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.comment = software.amazon.jsii.Kernel.get(this, "comment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.credentialType = software.amazon.jsii.Kernel.get(this, "credentialType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPairGenerateConfig = software.amazon.jsii.Kernel.get(this, "keyPairGenerateConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.passwordGenerateConfig = software.amazon.jsii.Kernel.get(this, "passwordGenerateConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.passwordGenerateType = software.amazon.jsii.Kernel.get(this, "passwordGenerateType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.taskScheduleConfig = software.amazon.jsii.Kernel.get(this, "taskScheduleConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.taskScheduleType = java.util.Objects.requireNonNull(builder.taskScheduleType, "taskScheduleType is required");
            this.comment = builder.comment;
            this.credentialType = builder.credentialType;
            this.keyPairGenerateConfig = builder.keyPairGenerateConfig;
            this.passwordGenerateConfig = builder.passwordGenerateConfig;
            this.passwordGenerateType = builder.passwordGenerateType;
            this.taskScheduleConfig = builder.taskScheduleConfig;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getTaskScheduleType() {
            return this.taskScheduleType;
        }

        @Override
        public final java.lang.Object getComment() {
            return this.comment;
        }

        @Override
        public final java.lang.Object getCredentialType() {
            return this.credentialType;
        }

        @Override
        public final java.lang.Object getKeyPairGenerateConfig() {
            return this.keyPairGenerateConfig;
        }

        @Override
        public final java.lang.Object getPasswordGenerateConfig() {
            return this.passwordGenerateConfig;
        }

        @Override
        public final java.lang.Object getPasswordGenerateType() {
            return this.passwordGenerateType;
        }

        @Override
        public final java.lang.Object getTaskScheduleConfig() {
            return this.taskScheduleConfig;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("taskScheduleType", om.valueToTree(this.getTaskScheduleType()));
            if (this.getComment() != null) {
                data.set("comment", om.valueToTree(this.getComment()));
            }
            if (this.getCredentialType() != null) {
                data.set("credentialType", om.valueToTree(this.getCredentialType()));
            }
            if (this.getKeyPairGenerateConfig() != null) {
                data.set("keyPairGenerateConfig", om.valueToTree(this.getKeyPairGenerateConfig()));
            }
            if (this.getPasswordGenerateConfig() != null) {
                data.set("passwordGenerateConfig", om.valueToTree(this.getPasswordGenerateConfig()));
            }
            if (this.getPasswordGenerateType() != null) {
                data.set("passwordGenerateType", om.valueToTree(this.getPasswordGenerateType()));
            }
            if (this.getTaskScheduleConfig() != null) {
                data.set("taskScheduleConfig", om.valueToTree(this.getTaskScheduleConfig()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-bastionhost.RosPasswordTaskProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosPasswordTaskProps.Jsii$Proxy that = (RosPasswordTaskProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (!name.equals(that.name)) return false;
            if (!taskScheduleType.equals(that.taskScheduleType)) return false;
            if (this.comment != null ? !this.comment.equals(that.comment) : that.comment != null) return false;
            if (this.credentialType != null ? !this.credentialType.equals(that.credentialType) : that.credentialType != null) return false;
            if (this.keyPairGenerateConfig != null ? !this.keyPairGenerateConfig.equals(that.keyPairGenerateConfig) : that.keyPairGenerateConfig != null) return false;
            if (this.passwordGenerateConfig != null ? !this.passwordGenerateConfig.equals(that.passwordGenerateConfig) : that.passwordGenerateConfig != null) return false;
            if (this.passwordGenerateType != null ? !this.passwordGenerateType.equals(that.passwordGenerateType) : that.passwordGenerateType != null) return false;
            return this.taskScheduleConfig != null ? this.taskScheduleConfig.equals(that.taskScheduleConfig) : that.taskScheduleConfig == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.taskScheduleType.hashCode());
            result = 31 * result + (this.comment != null ? this.comment.hashCode() : 0);
            result = 31 * result + (this.credentialType != null ? this.credentialType.hashCode() : 0);
            result = 31 * result + (this.keyPairGenerateConfig != null ? this.keyPairGenerateConfig.hashCode() : 0);
            result = 31 * result + (this.passwordGenerateConfig != null ? this.passwordGenerateConfig.hashCode() : 0);
            result = 31 * result + (this.passwordGenerateType != null ? this.passwordGenerateType.hashCode() : 0);
            result = 31 * result + (this.taskScheduleConfig != null ? this.taskScheduleConfig.hashCode() : 0);
            return result;
        }
    }
}
