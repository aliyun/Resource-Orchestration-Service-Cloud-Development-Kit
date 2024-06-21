package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>LaunchTemplate</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-launchtemplate
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:09.512Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.LaunchTemplateProps")
@software.amazon.jsii.Jsii.Proxy(LaunchTemplateProps.Jsii$Proxy.class)
public interface LaunchTemplateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property launchTemplateId: Template ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLaunchTemplateId();

    /**
     * @return a {@link Builder} of {@link LaunchTemplateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link LaunchTemplateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<LaunchTemplateProps> {
        java.lang.Object launchTemplateId;

        /**
         * Sets the value of {@link LaunchTemplateProps#getLaunchTemplateId}
         * @param launchTemplateId Property launchTemplateId: Template ID. This parameter is required.
         * @return {@code this}
         */
        public Builder launchTemplateId(java.lang.String launchTemplateId) {
            this.launchTemplateId = launchTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplateProps#getLaunchTemplateId}
         * @param launchTemplateId Property launchTemplateId: Template ID. This parameter is required.
         * @return {@code this}
         */
        public Builder launchTemplateId(com.aliyun.ros.cdk.core.IResolvable launchTemplateId) {
            this.launchTemplateId = launchTemplateId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link LaunchTemplateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public LaunchTemplateProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link LaunchTemplateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LaunchTemplateProps {
        private final java.lang.Object launchTemplateId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.launchTemplateId = software.amazon.jsii.Kernel.get(this, "launchTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.launchTemplateId = java.util.Objects.requireNonNull(builder.launchTemplateId, "launchTemplateId is required");
        }

        @Override
        public final java.lang.Object getLaunchTemplateId() {
            return this.launchTemplateId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("launchTemplateId", om.valueToTree(this.getLaunchTemplateId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.LaunchTemplateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            LaunchTemplateProps.Jsii$Proxy that = (LaunchTemplateProps.Jsii$Proxy) o;

            return this.launchTemplateId.equals(that.launchTemplateId);
        }

        @Override
        public final int hashCode() {
            int result = this.launchTemplateId.hashCode();
            return result;
        }
    }
}
