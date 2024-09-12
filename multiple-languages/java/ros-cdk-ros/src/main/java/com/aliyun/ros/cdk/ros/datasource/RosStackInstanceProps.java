package com.aliyun.ros.cdk.ros.datasource;

/**
 * Properties for defining a <code>RosStackInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackinstance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:30.460Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.datasource.RosStackInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosStackInstanceProps.Jsii$Proxy.class)
public interface RosStackInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStackGroupName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStackInstanceAccountId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStackInstanceRegionId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOutputOption() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosStackInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosStackInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosStackInstanceProps> {
        java.lang.Object stackGroupName;
        java.lang.Object stackInstanceAccountId;
        java.lang.Object stackInstanceRegionId;
        java.lang.Object outputOption;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link RosStackInstanceProps#getStackGroupName}
         * @param stackGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder stackGroupName(java.lang.String stackGroupName) {
            this.stackGroupName = stackGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosStackInstanceProps#getStackGroupName}
         * @param stackGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder stackGroupName(com.aliyun.ros.cdk.core.IResolvable stackGroupName) {
            this.stackGroupName = stackGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosStackInstanceProps#getStackInstanceAccountId}
         * @param stackInstanceAccountId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder stackInstanceAccountId(java.lang.String stackInstanceAccountId) {
            this.stackInstanceAccountId = stackInstanceAccountId;
            return this;
        }

        /**
         * Sets the value of {@link RosStackInstanceProps#getStackInstanceAccountId}
         * @param stackInstanceAccountId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder stackInstanceAccountId(com.aliyun.ros.cdk.core.IResolvable stackInstanceAccountId) {
            this.stackInstanceAccountId = stackInstanceAccountId;
            return this;
        }

        /**
         * Sets the value of {@link RosStackInstanceProps#getStackInstanceRegionId}
         * @param stackInstanceRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder stackInstanceRegionId(java.lang.String stackInstanceRegionId) {
            this.stackInstanceRegionId = stackInstanceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosStackInstanceProps#getStackInstanceRegionId}
         * @param stackInstanceRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder stackInstanceRegionId(com.aliyun.ros.cdk.core.IResolvable stackInstanceRegionId) {
            this.stackInstanceRegionId = stackInstanceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosStackInstanceProps#getOutputOption}
         * @param outputOption the value to be set.
         * @return {@code this}
         */
        public Builder outputOption(java.lang.String outputOption) {
            this.outputOption = outputOption;
            return this;
        }

        /**
         * Sets the value of {@link RosStackInstanceProps#getOutputOption}
         * @param outputOption the value to be set.
         * @return {@code this}
         */
        public Builder outputOption(com.aliyun.ros.cdk.core.IResolvable outputOption) {
            this.outputOption = outputOption;
            return this;
        }

        /**
         * Sets the value of {@link RosStackInstanceProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosStackInstanceProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosStackInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosStackInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosStackInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosStackInstanceProps {
        private final java.lang.Object stackGroupName;
        private final java.lang.Object stackInstanceAccountId;
        private final java.lang.Object stackInstanceRegionId;
        private final java.lang.Object outputOption;
        private final java.lang.Object refreshOptions;

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
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.refreshOptions = builder.refreshOptions;
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
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
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
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ros.datasource.RosStackInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosStackInstanceProps.Jsii$Proxy that = (RosStackInstanceProps.Jsii$Proxy) o;

            if (!stackGroupName.equals(that.stackGroupName)) return false;
            if (!stackInstanceAccountId.equals(that.stackInstanceAccountId)) return false;
            if (!stackInstanceRegionId.equals(that.stackInstanceRegionId)) return false;
            if (this.outputOption != null ? !this.outputOption.equals(that.outputOption) : that.outputOption != null) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.stackGroupName.hashCode();
            result = 31 * result + (this.stackInstanceAccountId.hashCode());
            result = 31 * result + (this.stackInstanceRegionId.hashCode());
            result = 31 * result + (this.outputOption != null ? this.outputOption.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
