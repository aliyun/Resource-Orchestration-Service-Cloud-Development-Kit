package com.aliyun.ros.cdk.cms;

/**
 * Properties for defining a <code>RosSlsGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-slsgroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:08.480Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosSlsGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosSlsGroupProps.Jsii$Proxy.class)
public interface RosSlsGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSlsGroupConfig();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSlsGroupName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSlsGroupDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSlsGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSlsGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSlsGroupProps> {
        java.lang.Object slsGroupConfig;
        java.lang.Object slsGroupName;
        java.lang.Object slsGroupDescription;

        /**
         * Sets the value of {@link RosSlsGroupProps#getSlsGroupConfig}
         * @param slsGroupConfig the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder slsGroupConfig(com.aliyun.ros.cdk.core.IResolvable slsGroupConfig) {
            this.slsGroupConfig = slsGroupConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosSlsGroupProps#getSlsGroupConfig}
         * @param slsGroupConfig the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder slsGroupConfig(java.util.List<? extends java.lang.Object> slsGroupConfig) {
            this.slsGroupConfig = slsGroupConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosSlsGroupProps#getSlsGroupName}
         * @param slsGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder slsGroupName(java.lang.String slsGroupName) {
            this.slsGroupName = slsGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosSlsGroupProps#getSlsGroupName}
         * @param slsGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder slsGroupName(com.aliyun.ros.cdk.core.IResolvable slsGroupName) {
            this.slsGroupName = slsGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosSlsGroupProps#getSlsGroupDescription}
         * @param slsGroupDescription the value to be set.
         * @return {@code this}
         */
        public Builder slsGroupDescription(java.lang.String slsGroupDescription) {
            this.slsGroupDescription = slsGroupDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosSlsGroupProps#getSlsGroupDescription}
         * @param slsGroupDescription the value to be set.
         * @return {@code this}
         */
        public Builder slsGroupDescription(com.aliyun.ros.cdk.core.IResolvable slsGroupDescription) {
            this.slsGroupDescription = slsGroupDescription;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSlsGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSlsGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSlsGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSlsGroupProps {
        private final java.lang.Object slsGroupConfig;
        private final java.lang.Object slsGroupName;
        private final java.lang.Object slsGroupDescription;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.slsGroupConfig = software.amazon.jsii.Kernel.get(this, "slsGroupConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slsGroupName = software.amazon.jsii.Kernel.get(this, "slsGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slsGroupDescription = software.amazon.jsii.Kernel.get(this, "slsGroupDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.slsGroupConfig = java.util.Objects.requireNonNull(builder.slsGroupConfig, "slsGroupConfig is required");
            this.slsGroupName = java.util.Objects.requireNonNull(builder.slsGroupName, "slsGroupName is required");
            this.slsGroupDescription = builder.slsGroupDescription;
        }

        @Override
        public final java.lang.Object getSlsGroupConfig() {
            return this.slsGroupConfig;
        }

        @Override
        public final java.lang.Object getSlsGroupName() {
            return this.slsGroupName;
        }

        @Override
        public final java.lang.Object getSlsGroupDescription() {
            return this.slsGroupDescription;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("slsGroupConfig", om.valueToTree(this.getSlsGroupConfig()));
            data.set("slsGroupName", om.valueToTree(this.getSlsGroupName()));
            if (this.getSlsGroupDescription() != null) {
                data.set("slsGroupDescription", om.valueToTree(this.getSlsGroupDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosSlsGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSlsGroupProps.Jsii$Proxy that = (RosSlsGroupProps.Jsii$Proxy) o;

            if (!slsGroupConfig.equals(that.slsGroupConfig)) return false;
            if (!slsGroupName.equals(that.slsGroupName)) return false;
            return this.slsGroupDescription != null ? this.slsGroupDescription.equals(that.slsGroupDescription) : that.slsGroupDescription == null;
        }

        @Override
        public final int hashCode() {
            int result = this.slsGroupConfig.hashCode();
            result = 31 * result + (this.slsGroupName.hashCode());
            result = 31 * result + (this.slsGroupDescription != null ? this.slsGroupDescription.hashCode() : 0);
            return result;
        }
    }
}
