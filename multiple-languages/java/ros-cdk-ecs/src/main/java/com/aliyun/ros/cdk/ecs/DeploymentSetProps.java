package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::DeploymentSet`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.189Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.DeploymentSetProps")
@software.amazon.jsii.Jsii.Proxy(DeploymentSetProps.Jsii$Proxy.class)
public interface DeploymentSetProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property deploymentSetName: The name of the deployment set.
     * <p>
     * It must be 2 to 128 characters in length. It must
     * start with a letter and cannot start with http:// or https://. It can contain letters,
     * digits, colons (:), underscores (_), and hyphens (-).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeploymentSetName() {
        return null;
    }

    /**
     * Property description: The description of the deployment set.
     * <p>
     * It must be 2 to 256 characters in length. It
     * cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property onUnableToRedeployFailedInstance: The emergency solution to redeploy failed instances in the deployment set.
     * <p>
     * Valid values:
     * CancelMembershipAndStart: restarts the instances immediately after they are shut down
     * and migrated to other deployment sets. This is the default value.
     * KeepStopped: keeps the instances shut down and restarts them after the deployment
     * set is replenished.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOnUnableToRedeployFailedInstance() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DeploymentSetProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DeploymentSetProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DeploymentSetProps> {
        private java.lang.Object deploymentSetName;
        private java.lang.Object description;
        private java.lang.Object onUnableToRedeployFailedInstance;

        /**
         * Sets the value of {@link DeploymentSetProps#getDeploymentSetName}
         * @param deploymentSetName Property deploymentSetName: The name of the deployment set.
         *                          It must be 2 to 128 characters in length. It must
         *                          start with a letter and cannot start with http:// or https://. It can contain letters,
         *                          digits, colons (:), underscores (_), and hyphens (-).
         * @return {@code this}
         */
        public Builder deploymentSetName(java.lang.String deploymentSetName) {
            this.deploymentSetName = deploymentSetName;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentSetProps#getDeploymentSetName}
         * @param deploymentSetName Property deploymentSetName: The name of the deployment set.
         *                          It must be 2 to 128 characters in length. It must
         *                          start with a letter and cannot start with http:// or https://. It can contain letters,
         *                          digits, colons (:), underscores (_), and hyphens (-).
         * @return {@code this}
         */
        public Builder deploymentSetName(com.aliyun.ros.cdk.core.IResolvable deploymentSetName) {
            this.deploymentSetName = deploymentSetName;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentSetProps#getDescription}
         * @param description Property description: The description of the deployment set.
         *                    It must be 2 to 256 characters in length. It
         *                    cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentSetProps#getDescription}
         * @param description Property description: The description of the deployment set.
         *                    It must be 2 to 256 characters in length. It
         *                    cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentSetProps#getOnUnableToRedeployFailedInstance}
         * @param onUnableToRedeployFailedInstance Property onUnableToRedeployFailedInstance: The emergency solution to redeploy failed instances in the deployment set.
         *                                         Valid values:
         *                                         CancelMembershipAndStart: restarts the instances immediately after they are shut down
         *                                         and migrated to other deployment sets. This is the default value.
         *                                         KeepStopped: keeps the instances shut down and restarts them after the deployment
         *                                         set is replenished.
         * @return {@code this}
         */
        public Builder onUnableToRedeployFailedInstance(java.lang.String onUnableToRedeployFailedInstance) {
            this.onUnableToRedeployFailedInstance = onUnableToRedeployFailedInstance;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentSetProps#getOnUnableToRedeployFailedInstance}
         * @param onUnableToRedeployFailedInstance Property onUnableToRedeployFailedInstance: The emergency solution to redeploy failed instances in the deployment set.
         *                                         Valid values:
         *                                         CancelMembershipAndStart: restarts the instances immediately after they are shut down
         *                                         and migrated to other deployment sets. This is the default value.
         *                                         KeepStopped: keeps the instances shut down and restarts them after the deployment
         *                                         set is replenished.
         * @return {@code this}
         */
        public Builder onUnableToRedeployFailedInstance(com.aliyun.ros.cdk.core.IResolvable onUnableToRedeployFailedInstance) {
            this.onUnableToRedeployFailedInstance = onUnableToRedeployFailedInstance;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DeploymentSetProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DeploymentSetProps build() {
            return new Jsii$Proxy(deploymentSetName, description, onUnableToRedeployFailedInstance);
        }
    }

    /**
     * An implementation for {@link DeploymentSetProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DeploymentSetProps {
        private final java.lang.Object deploymentSetName;
        private final java.lang.Object description;
        private final java.lang.Object onUnableToRedeployFailedInstance;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.deploymentSetName = software.amazon.jsii.Kernel.get(this, "deploymentSetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.onUnableToRedeployFailedInstance = software.amazon.jsii.Kernel.get(this, "onUnableToRedeployFailedInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object deploymentSetName, final java.lang.Object description, final java.lang.Object onUnableToRedeployFailedInstance) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.deploymentSetName = deploymentSetName;
            this.description = description;
            this.onUnableToRedeployFailedInstance = onUnableToRedeployFailedInstance;
        }

        @Override
        public final java.lang.Object getDeploymentSetName() {
            return this.deploymentSetName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getOnUnableToRedeployFailedInstance() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.DeploymentSetProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DeploymentSetProps.Jsii$Proxy that = (DeploymentSetProps.Jsii$Proxy) o;

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
