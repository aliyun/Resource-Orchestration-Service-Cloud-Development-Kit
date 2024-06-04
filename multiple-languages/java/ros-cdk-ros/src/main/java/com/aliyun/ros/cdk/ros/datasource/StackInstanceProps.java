package com.aliyun.ros.cdk.ros.datasource;

/**
 * Properties for defining a <code>StackInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackinstance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:57.332Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.datasource.StackInstanceProps")
@software.amazon.jsii.Jsii.Proxy(StackInstanceProps.Jsii$Proxy.class)
public interface StackInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property stackGroupName: Resource stack group name.
     * <p>
     * Names are unique within a single region.
     * The length must not exceed 255 characters, must start with a number or an English letter, and can contain numbers, English letters, dashes (-) and underscores (_)
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStackGroupName();

    /**
     * Property stackInstanceAccountId: The target account ID to which the resource stack belongs.
     * <p>
     * In the self-service management permission mode, the account is an Alibaba Cloud account.
     * In service management permission mode, this account is a member account of the resource directory.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStackInstanceAccountId();

    /**
     * Property stackInstanceRegionId: The region to which the resource stack belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStackInstanceRegionId();

    /**
     * Property outputOption: Whether to return the Outputs parameter resource stack output list.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOutputOption() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link StackInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link StackInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<StackInstanceProps> {
        java.lang.Object stackGroupName;
        java.lang.Object stackInstanceAccountId;
        java.lang.Object stackInstanceRegionId;
        java.lang.Object outputOption;

        /**
         * Sets the value of {@link StackInstanceProps#getStackGroupName}
         * @param stackGroupName Property stackGroupName: Resource stack group name. This parameter is required.
         *                       Names are unique within a single region.
         *                       The length must not exceed 255 characters, must start with a number or an English letter, and can contain numbers, English letters, dashes (-) and underscores (_)
         * @return {@code this}
         */
        public Builder stackGroupName(java.lang.String stackGroupName) {
            this.stackGroupName = stackGroupName;
            return this;
        }

        /**
         * Sets the value of {@link StackInstanceProps#getStackGroupName}
         * @param stackGroupName Property stackGroupName: Resource stack group name. This parameter is required.
         *                       Names are unique within a single region.
         *                       The length must not exceed 255 characters, must start with a number or an English letter, and can contain numbers, English letters, dashes (-) and underscores (_)
         * @return {@code this}
         */
        public Builder stackGroupName(com.aliyun.ros.cdk.core.IResolvable stackGroupName) {
            this.stackGroupName = stackGroupName;
            return this;
        }

        /**
         * Sets the value of {@link StackInstanceProps#getStackInstanceAccountId}
         * @param stackInstanceAccountId Property stackInstanceAccountId: The target account ID to which the resource stack belongs. This parameter is required.
         *                               In the self-service management permission mode, the account is an Alibaba Cloud account.
         *                               In service management permission mode, this account is a member account of the resource directory.
         * @return {@code this}
         */
        public Builder stackInstanceAccountId(java.lang.String stackInstanceAccountId) {
            this.stackInstanceAccountId = stackInstanceAccountId;
            return this;
        }

        /**
         * Sets the value of {@link StackInstanceProps#getStackInstanceAccountId}
         * @param stackInstanceAccountId Property stackInstanceAccountId: The target account ID to which the resource stack belongs. This parameter is required.
         *                               In the self-service management permission mode, the account is an Alibaba Cloud account.
         *                               In service management permission mode, this account is a member account of the resource directory.
         * @return {@code this}
         */
        public Builder stackInstanceAccountId(com.aliyun.ros.cdk.core.IResolvable stackInstanceAccountId) {
            this.stackInstanceAccountId = stackInstanceAccountId;
            return this;
        }

        /**
         * Sets the value of {@link StackInstanceProps#getStackInstanceRegionId}
         * @param stackInstanceRegionId Property stackInstanceRegionId: The region to which the resource stack belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder stackInstanceRegionId(java.lang.String stackInstanceRegionId) {
            this.stackInstanceRegionId = stackInstanceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link StackInstanceProps#getStackInstanceRegionId}
         * @param stackInstanceRegionId Property stackInstanceRegionId: The region to which the resource stack belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder stackInstanceRegionId(com.aliyun.ros.cdk.core.IResolvable stackInstanceRegionId) {
            this.stackInstanceRegionId = stackInstanceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link StackInstanceProps#getOutputOption}
         * @param outputOption Property outputOption: Whether to return the Outputs parameter resource stack output list.
         * @return {@code this}
         */
        public Builder outputOption(java.lang.String outputOption) {
            this.outputOption = outputOption;
            return this;
        }

        /**
         * Sets the value of {@link StackInstanceProps#getOutputOption}
         * @param outputOption Property outputOption: Whether to return the Outputs parameter resource stack output list.
         * @return {@code this}
         */
        public Builder outputOption(com.aliyun.ros.cdk.core.IResolvable outputOption) {
            this.outputOption = outputOption;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link StackInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public StackInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link StackInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements StackInstanceProps {
        private final java.lang.Object stackGroupName;
        private final java.lang.Object stackInstanceAccountId;
        private final java.lang.Object stackInstanceRegionId;
        private final java.lang.Object outputOption;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.stackGroupName = software.amazon.jsii.Kernel.get(this, "stackGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.stackInstanceAccountId = software.amazon.jsii.Kernel.get(this, "stackInstanceAccountId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.stackInstanceRegionId = software.amazon.jsii.Kernel.get(this, "stackInstanceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.outputOption = software.amazon.jsii.Kernel.get(this, "outputOption", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.stackGroupName = java.util.Objects.requireNonNull(builder.stackGroupName, "stackGroupName is required");
            this.stackInstanceAccountId = java.util.Objects.requireNonNull(builder.stackInstanceAccountId, "stackInstanceAccountId is required");
            this.stackInstanceRegionId = java.util.Objects.requireNonNull(builder.stackInstanceRegionId, "stackInstanceRegionId is required");
            this.outputOption = builder.outputOption;
        }

        @Override
        public final java.lang.Object getStackGroupName() {
            return this.stackGroupName;
        }

        @Override
        public final java.lang.Object getStackInstanceAccountId() {
            return this.stackInstanceAccountId;
        }

        @Override
        public final java.lang.Object getStackInstanceRegionId() {
            return this.stackInstanceRegionId;
        }

        @Override
        public final java.lang.Object getOutputOption() {
            return this.outputOption;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("stackGroupName", om.valueToTree(this.getStackGroupName()));
            data.set("stackInstanceAccountId", om.valueToTree(this.getStackInstanceAccountId()));
            data.set("stackInstanceRegionId", om.valueToTree(this.getStackInstanceRegionId()));
            if (this.getOutputOption() != null) {
                data.set("outputOption", om.valueToTree(this.getOutputOption()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ros.datasource.StackInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            StackInstanceProps.Jsii$Proxy that = (StackInstanceProps.Jsii$Proxy) o;

            if (!stackGroupName.equals(that.stackGroupName)) return false;
            if (!stackInstanceAccountId.equals(that.stackInstanceAccountId)) return false;
            if (!stackInstanceRegionId.equals(that.stackInstanceRegionId)) return false;
            return this.outputOption != null ? this.outputOption.equals(that.outputOption) : that.outputOption == null;
        }

        @Override
        public final int hashCode() {
            int result = this.stackGroupName.hashCode();
            result = 31 * result + (this.stackInstanceAccountId.hashCode());
            result = 31 * result + (this.stackInstanceRegionId.hashCode());
            result = 31 * result + (this.outputOption != null ? this.outputOption.hashCode() : 0);
            return result;
        }
    }
}
