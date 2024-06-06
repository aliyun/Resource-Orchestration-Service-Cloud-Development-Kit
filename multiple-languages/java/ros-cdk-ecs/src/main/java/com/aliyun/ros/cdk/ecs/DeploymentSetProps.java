package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>DeploymentSet</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-deploymentset
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:14.194Z")
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
     * Property groupCount: Set the number of groups for the deployment set group high availability policy.
     * <p>
     * Value range: 1~7.
     * Default value: 3.
     * This parameter only takes effect when Strategy=AvailabilityGroup.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupCount() {
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
     * Property strategy: Deployment strategy.
     * <p>
     * Ranges:
     * Availability: High availability strategy.
     * AvailabilityGroup: Deployment group high availability strategy.
     * LowLatency: Network low latency strategy.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStrategy() {
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
        java.lang.Object deploymentSetName;
        java.lang.Object description;
        java.lang.Object groupCount;
        java.lang.Object onUnableToRedeployFailedInstance;
        java.lang.Object strategy;

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
         * Sets the value of {@link DeploymentSetProps#getGroupCount}
         * @param groupCount Property groupCount: Set the number of groups for the deployment set group high availability policy.
         *                   Value range: 1~7.
         *                   Default value: 3.
         *                   This parameter only takes effect when Strategy=AvailabilityGroup.
         * @return {@code this}
         */
        public Builder groupCount(java.lang.Number groupCount) {
            this.groupCount = groupCount;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentSetProps#getGroupCount}
         * @param groupCount Property groupCount: Set the number of groups for the deployment set group high availability policy.
         *                   Value range: 1~7.
         *                   Default value: 3.
         *                   This parameter only takes effect when Strategy=AvailabilityGroup.
         * @return {@code this}
         */
        public Builder groupCount(com.aliyun.ros.cdk.core.IResolvable groupCount) {
            this.groupCount = groupCount;
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
         * Sets the value of {@link DeploymentSetProps#getStrategy}
         * @param strategy Property strategy: Deployment strategy.
         *                 Ranges:
         *                 Availability: High availability strategy.
         *                 AvailabilityGroup: Deployment group high availability strategy.
         *                 LowLatency: Network low latency strategy.
         * @return {@code this}
         */
        public Builder strategy(java.lang.String strategy) {
            this.strategy = strategy;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentSetProps#getStrategy}
         * @param strategy Property strategy: Deployment strategy.
         *                 Ranges:
         *                 Availability: High availability strategy.
         *                 AvailabilityGroup: Deployment group high availability strategy.
         *                 LowLatency: Network low latency strategy.
         * @return {@code this}
         */
        public Builder strategy(com.aliyun.ros.cdk.core.IResolvable strategy) {
            this.strategy = strategy;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DeploymentSetProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DeploymentSetProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DeploymentSetProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DeploymentSetProps {
        private final java.lang.Object deploymentSetName;
        private final java.lang.Object description;
        private final java.lang.Object groupCount;
        private final java.lang.Object onUnableToRedeployFailedInstance;
        private final java.lang.Object strategy;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.deploymentSetName = software.amazon.jsii.Kernel.get(this, "deploymentSetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupCount = software.amazon.jsii.Kernel.get(this, "groupCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.onUnableToRedeployFailedInstance = software.amazon.jsii.Kernel.get(this, "onUnableToRedeployFailedInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.strategy = software.amazon.jsii.Kernel.get(this, "strategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.deploymentSetName = builder.deploymentSetName;
            this.description = builder.description;
            this.groupCount = builder.groupCount;
            this.onUnableToRedeployFailedInstance = builder.onUnableToRedeployFailedInstance;
            this.strategy = builder.strategy;
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
        public final java.lang.Object getGroupCount() {
            return this.groupCount;
        }

        @Override
        public final java.lang.Object getOnUnableToRedeployFailedInstance() {
            return this.onUnableToRedeployFailedInstance;
        }

        @Override
        public final java.lang.Object getStrategy() {
            return this.strategy;
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
            if (this.getGroupCount() != null) {
                data.set("groupCount", om.valueToTree(this.getGroupCount()));
            }
            if (this.getOnUnableToRedeployFailedInstance() != null) {
                data.set("onUnableToRedeployFailedInstance", om.valueToTree(this.getOnUnableToRedeployFailedInstance()));
            }
            if (this.getStrategy() != null) {
                data.set("strategy", om.valueToTree(this.getStrategy()));
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
            if (this.groupCount != null ? !this.groupCount.equals(that.groupCount) : that.groupCount != null) return false;
            if (this.onUnableToRedeployFailedInstance != null ? !this.onUnableToRedeployFailedInstance.equals(that.onUnableToRedeployFailedInstance) : that.onUnableToRedeployFailedInstance != null) return false;
            return this.strategy != null ? this.strategy.equals(that.strategy) : that.strategy == null;
        }

        @Override
        public final int hashCode() {
            int result = this.deploymentSetName != null ? this.deploymentSetName.hashCode() : 0;
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.groupCount != null ? this.groupCount.hashCode() : 0);
            result = 31 * result + (this.onUnableToRedeployFailedInstance != null ? this.onUnableToRedeployFailedInstance.hashCode() : 0);
            result = 31 * result + (this.strategy != null ? this.strategy.hashCode() : 0);
            return result;
        }
    }
}
