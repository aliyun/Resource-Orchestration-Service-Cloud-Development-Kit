package com.aliyun.ros.cdk.dts;

/**
 * Properties for defining a <code>ConsumerChannel</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-consumerchannel
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:48.082Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.ConsumerChannelProps")
@software.amazon.jsii.Jsii.Proxy(ConsumerChannelProps.Jsii$Proxy.class)
public interface ConsumerChannelProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property consumerGroupName: Consumer group name, up to 128 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConsumerGroupName();

    /**
     * Property consumerGroupPassword: Consumer group password, composed of uppercase letters, lowercase letters, numbers, and special characters (at least two types), 8-32 characters long.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConsumerGroupPassword();

    /**
     * Property consumerGroupUserName: Username, composed of uppercase letters, lowercase letters, numbers, and underscores, up to 16 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConsumerGroupUserName();

    /**
     * Property dtsInstanceId: DTS subscription instance ID.
     * <p>
     * Either DtsInstanceId or DtsJobId must be provided.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDtsInstanceId() {
        return null;
    }

    /**
     * Property dtsJobId: DTS subscription job ID.
     * <p>
     * Either DtsInstanceId or DtsJobId must be provided.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDtsJobId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ConsumerChannelProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ConsumerChannelProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ConsumerChannelProps> {
        java.lang.Object consumerGroupName;
        java.lang.Object consumerGroupPassword;
        java.lang.Object consumerGroupUserName;
        java.lang.Object dtsInstanceId;
        java.lang.Object dtsJobId;

        /**
         * Sets the value of {@link ConsumerChannelProps#getConsumerGroupName}
         * @param consumerGroupName Property consumerGroupName: Consumer group name, up to 128 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder consumerGroupName(java.lang.String consumerGroupName) {
            this.consumerGroupName = consumerGroupName;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerChannelProps#getConsumerGroupName}
         * @param consumerGroupName Property consumerGroupName: Consumer group name, up to 128 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder consumerGroupName(com.aliyun.ros.cdk.core.IResolvable consumerGroupName) {
            this.consumerGroupName = consumerGroupName;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerChannelProps#getConsumerGroupPassword}
         * @param consumerGroupPassword Property consumerGroupPassword: Consumer group password, composed of uppercase letters, lowercase letters, numbers, and special characters (at least two types), 8-32 characters long. This parameter is required.
         * @return {@code this}
         */
        public Builder consumerGroupPassword(java.lang.String consumerGroupPassword) {
            this.consumerGroupPassword = consumerGroupPassword;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerChannelProps#getConsumerGroupPassword}
         * @param consumerGroupPassword Property consumerGroupPassword: Consumer group password, composed of uppercase letters, lowercase letters, numbers, and special characters (at least two types), 8-32 characters long. This parameter is required.
         * @return {@code this}
         */
        public Builder consumerGroupPassword(com.aliyun.ros.cdk.core.IResolvable consumerGroupPassword) {
            this.consumerGroupPassword = consumerGroupPassword;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerChannelProps#getConsumerGroupUserName}
         * @param consumerGroupUserName Property consumerGroupUserName: Username, composed of uppercase letters, lowercase letters, numbers, and underscores, up to 16 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder consumerGroupUserName(java.lang.String consumerGroupUserName) {
            this.consumerGroupUserName = consumerGroupUserName;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerChannelProps#getConsumerGroupUserName}
         * @param consumerGroupUserName Property consumerGroupUserName: Username, composed of uppercase letters, lowercase letters, numbers, and underscores, up to 16 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder consumerGroupUserName(com.aliyun.ros.cdk.core.IResolvable consumerGroupUserName) {
            this.consumerGroupUserName = consumerGroupUserName;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerChannelProps#getDtsInstanceId}
         * @param dtsInstanceId Property dtsInstanceId: DTS subscription instance ID.
         *                      Either DtsInstanceId or DtsJobId must be provided.
         * @return {@code this}
         */
        public Builder dtsInstanceId(java.lang.String dtsInstanceId) {
            this.dtsInstanceId = dtsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerChannelProps#getDtsInstanceId}
         * @param dtsInstanceId Property dtsInstanceId: DTS subscription instance ID.
         *                      Either DtsInstanceId or DtsJobId must be provided.
         * @return {@code this}
         */
        public Builder dtsInstanceId(com.aliyun.ros.cdk.core.IResolvable dtsInstanceId) {
            this.dtsInstanceId = dtsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerChannelProps#getDtsJobId}
         * @param dtsJobId Property dtsJobId: DTS subscription job ID.
         *                 Either DtsInstanceId or DtsJobId must be provided.
         * @return {@code this}
         */
        public Builder dtsJobId(java.lang.String dtsJobId) {
            this.dtsJobId = dtsJobId;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerChannelProps#getDtsJobId}
         * @param dtsJobId Property dtsJobId: DTS subscription job ID.
         *                 Either DtsInstanceId or DtsJobId must be provided.
         * @return {@code this}
         */
        public Builder dtsJobId(com.aliyun.ros.cdk.core.IResolvable dtsJobId) {
            this.dtsJobId = dtsJobId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ConsumerChannelProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ConsumerChannelProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ConsumerChannelProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConsumerChannelProps {
        private final java.lang.Object consumerGroupName;
        private final java.lang.Object consumerGroupPassword;
        private final java.lang.Object consumerGroupUserName;
        private final java.lang.Object dtsInstanceId;
        private final java.lang.Object dtsJobId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.consumerGroupName = software.amazon.jsii.Kernel.get(this, "consumerGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.consumerGroupPassword = software.amazon.jsii.Kernel.get(this, "consumerGroupPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.consumerGroupUserName = software.amazon.jsii.Kernel.get(this, "consumerGroupUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dtsInstanceId = software.amazon.jsii.Kernel.get(this, "dtsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dtsJobId = software.amazon.jsii.Kernel.get(this, "dtsJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.consumerGroupName = java.util.Objects.requireNonNull(builder.consumerGroupName, "consumerGroupName is required");
            this.consumerGroupPassword = java.util.Objects.requireNonNull(builder.consumerGroupPassword, "consumerGroupPassword is required");
            this.consumerGroupUserName = java.util.Objects.requireNonNull(builder.consumerGroupUserName, "consumerGroupUserName is required");
            this.dtsInstanceId = builder.dtsInstanceId;
            this.dtsJobId = builder.dtsJobId;
        }

        @Override
        public final java.lang.Object getConsumerGroupName() {
            return this.consumerGroupName;
        }

        @Override
        public final java.lang.Object getConsumerGroupPassword() {
            return this.consumerGroupPassword;
        }

        @Override
        public final java.lang.Object getConsumerGroupUserName() {
            return this.consumerGroupUserName;
        }

        @Override
        public final java.lang.Object getDtsInstanceId() {
            return this.dtsInstanceId;
        }

        @Override
        public final java.lang.Object getDtsJobId() {
            return this.dtsJobId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("consumerGroupName", om.valueToTree(this.getConsumerGroupName()));
            data.set("consumerGroupPassword", om.valueToTree(this.getConsumerGroupPassword()));
            data.set("consumerGroupUserName", om.valueToTree(this.getConsumerGroupUserName()));
            if (this.getDtsInstanceId() != null) {
                data.set("dtsInstanceId", om.valueToTree(this.getDtsInstanceId()));
            }
            if (this.getDtsJobId() != null) {
                data.set("dtsJobId", om.valueToTree(this.getDtsJobId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.ConsumerChannelProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ConsumerChannelProps.Jsii$Proxy that = (ConsumerChannelProps.Jsii$Proxy) o;

            if (!consumerGroupName.equals(that.consumerGroupName)) return false;
            if (!consumerGroupPassword.equals(that.consumerGroupPassword)) return false;
            if (!consumerGroupUserName.equals(that.consumerGroupUserName)) return false;
            if (this.dtsInstanceId != null ? !this.dtsInstanceId.equals(that.dtsInstanceId) : that.dtsInstanceId != null) return false;
            return this.dtsJobId != null ? this.dtsJobId.equals(that.dtsJobId) : that.dtsJobId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.consumerGroupName.hashCode();
            result = 31 * result + (this.consumerGroupPassword.hashCode());
            result = 31 * result + (this.consumerGroupUserName.hashCode());
            result = 31 * result + (this.dtsInstanceId != null ? this.dtsInstanceId.hashCode() : 0);
            result = 31 * result + (this.dtsJobId != null ? this.dtsJobId.hashCode() : 0);
            return result;
        }
    }
}
