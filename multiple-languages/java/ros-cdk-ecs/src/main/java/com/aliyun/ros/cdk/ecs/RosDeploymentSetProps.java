package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::DeploymentSet`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T03:36:09.984Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosDeploymentSetProps")
@software.amazon.jsii.Jsii.Proxy(RosDeploymentSetProps.Jsii$Proxy.class)
public interface RosDeploymentSetProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDeploymentSetName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getOnUnableToRedeployFailedInstance() {
        return null;
    }

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
        private java.lang.String deploymentSetName;
        private java.lang.String description;
        private java.lang.String onUnableToRedeployFailedInstance;

        /**
         * Sets the value of {@link RosDeploymentSetProps#getDeploymentSetName}
         * @param deploymentSetName the value to be set.
         * @return {@code this}
         */
        public Builder deploymentSetName(java.lang.String deploymentSetName) {
            this.deploymentSetName = deploymentSetName;
            return this;
        }

        /**
         * Sets the value of {@link RosDeploymentSetProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosDeploymentSetProps#getOnUnableToRedeployFailedInstance}
         * @param onUnableToRedeployFailedInstance the value to be set.
         * @return {@code this}
         */
        public Builder onUnableToRedeployFailedInstance(java.lang.String onUnableToRedeployFailedInstance) {
            this.onUnableToRedeployFailedInstance = onUnableToRedeployFailedInstance;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDeploymentSetProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDeploymentSetProps build() {
            return new Jsii$Proxy(deploymentSetName, description, onUnableToRedeployFailedInstance);
        }
    }

    /**
     * An implementation for {@link RosDeploymentSetProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDeploymentSetProps {
        private final java.lang.String deploymentSetName;
        private final java.lang.String description;
        private final java.lang.String onUnableToRedeployFailedInstance;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.deploymentSetName = software.amazon.jsii.Kernel.get(this, "deploymentSetName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.onUnableToRedeployFailedInstance = software.amazon.jsii.Kernel.get(this, "onUnableToRedeployFailedInstance", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String deploymentSetName, final java.lang.String description, final java.lang.String onUnableToRedeployFailedInstance) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.deploymentSetName = deploymentSetName;
            this.description = description;
            this.onUnableToRedeployFailedInstance = onUnableToRedeployFailedInstance;
        }

        @Override
        public final java.lang.String getDeploymentSetName() {
            return this.deploymentSetName;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.String getOnUnableToRedeployFailedInstance() {
            return this.onUnableToRedeployFailedInstance;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDeploymentSetName() != null) {
                data.set("deploymentSetName", om.valueToTree(this.getDeploymentSetName()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getOnUnableToRedeployFailedInstance() != null) {
                data.set("onUnableToRedeployFailedInstance", om.valueToTree(this.getOnUnableToRedeployFailedInstance()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosDeploymentSetProps"));
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

            if (this.deploymentSetName != null ? !this.deploymentSetName.equals(that.deploymentSetName) : that.deploymentSetName != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.onUnableToRedeployFailedInstance != null ? this.onUnableToRedeployFailedInstance.equals(that.onUnableToRedeployFailedInstance) : that.onUnableToRedeployFailedInstance == null;
        }

        @Override
        public final int hashCode() {
            int result = this.deploymentSetName != null ? this.deploymentSetName.hashCode() : 0;
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.onUnableToRedeployFailedInstance != null ? this.onUnableToRedeployFailedInstance.hashCode() : 0);
            return result;
        }
    }
}
