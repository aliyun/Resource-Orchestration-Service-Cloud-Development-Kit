package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>RosDeploymentSet</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-deploymentset
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:09.545Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.RosDeploymentSetProps")
@software.amazon.jsii.Jsii.Proxy(RosDeploymentSetProps.Jsii$Proxy.class)
public interface RosDeploymentSetProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDeploymentSetId();

    /**
     * @return a {@link Builder} of {@link RosDeploymentSetProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDeploymentSetProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDeploymentSetProps> {
        java.lang.Object deploymentSetId;

        /**
         * Sets the value of {@link RosDeploymentSetProps#getDeploymentSetId}
         * @param deploymentSetId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder deploymentSetId(java.lang.String deploymentSetId) {
            this.deploymentSetId = deploymentSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosDeploymentSetProps#getDeploymentSetId}
         * @param deploymentSetId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder deploymentSetId(com.aliyun.ros.cdk.core.IResolvable deploymentSetId) {
            this.deploymentSetId = deploymentSetId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDeploymentSetProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDeploymentSetProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDeploymentSetProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDeploymentSetProps {
        private final java.lang.Object deploymentSetId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.deploymentSetId = software.amazon.jsii.Kernel.get(this, "deploymentSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.deploymentSetId = java.util.Objects.requireNonNull(builder.deploymentSetId, "deploymentSetId is required");
        }

        @Override
        public final java.lang.Object getDeploymentSetId() {
            return this.deploymentSetId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("deploymentSetId", om.valueToTree(this.getDeploymentSetId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.RosDeploymentSetProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDeploymentSetProps.Jsii$Proxy that = (RosDeploymentSetProps.Jsii$Proxy) o;

            return this.deploymentSetId.equals(that.deploymentSetId);
        }

        @Override
        public final int hashCode() {
            int result = this.deploymentSetId.hashCode();
            return result;
        }
    }
}
