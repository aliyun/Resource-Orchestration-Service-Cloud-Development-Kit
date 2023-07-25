package com.aliyun.ros.cdk.ros;

/**
 * Properties for defining a <code>ALIYUN::ROS::StackInstances</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:56:02.143Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.StackInstancesProps")
@software.amazon.jsii.Jsii.Proxy(StackInstancesProps.Jsii$Proxy.class)
public interface StackInstancesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property regionIds: undefined.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRegionIds();

    /**
     * Property stackGroupName: undefined.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStackGroupName();

    /**
     * Property accountIds: undefined.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountIds() {
        return null;
    }

    /**
     * Property deploymentTargets: undefined.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeploymentTargets() {
        return null;
    }

    /**
     * Property disableRollback: undefined.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisableRollback() {
        return null;
    }

    /**
     * Property operationDescription: undefined.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOperationDescription() {
        return null;
    }

    /**
     * Property operationPreferences: undefined.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOperationPreferences() {
        return null;
    }

    /**
     * Property parameterOverrides: undefined.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParameterOverrides() {
        return null;
    }

    /**
     * Property retainStacks: undefined.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRetainStacks() {
        return null;
    }

    /**
     * Property timeoutInMinutes: undefined.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeoutInMinutes() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link StackInstancesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link StackInstancesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<StackInstancesProps> {
        java.lang.Object regionIds;
        java.lang.Object stackGroupName;
        java.lang.Object accountIds;
        java.lang.Object deploymentTargets;
        java.lang.Object disableRollback;
        java.lang.Object operationDescription;
        java.lang.Object operationPreferences;
        java.lang.Object parameterOverrides;
        java.lang.Object retainStacks;
        java.lang.Object timeoutInMinutes;

        /**
         * Sets the value of {@link StackInstancesProps#getRegionIds}
         * @param regionIds Property regionIds: undefined. This parameter is required.
         * @return {@code this}
         */
        public Builder regionIds(com.aliyun.ros.cdk.core.IResolvable regionIds) {
            this.regionIds = regionIds;
            return this;
        }

        /**
         * Sets the value of {@link StackInstancesProps#getRegionIds}
         * @param regionIds Property regionIds: undefined. This parameter is required.
         * @return {@code this}
         */
        public Builder regionIds(java.util.List<? extends java.lang.Object> regionIds) {
            this.regionIds = regionIds;
            return this;
        }

        /**
         * Sets the value of {@link StackInstancesProps#getStackGroupName}
         * @param stackGroupName Property stackGroupName: undefined. This parameter is required.
         * @return {@code this}
         */
        public Builder stackGroupName(java.lang.String stackGroupName) {
            this.stackGroupName = stackGroupName;
            return this;
        }

        /**
         * Sets the value of {@link StackInstancesProps#getStackGroupName}
         * @param stackGroupName Property stackGroupName: undefined. This parameter is required.
         * @return {@code this}
         */
        public Builder stackGroupName(com.aliyun.ros.cdk.core.IResolvable stackGroupName) {
            this.stackGroupName = stackGroupName;
            return this;
        }

        /**
         * Sets the value of {@link StackInstancesProps#getAccountIds}
         * @param accountIds Property accountIds: undefined.
         * @return {@code this}
         */
        public Builder accountIds(com.aliyun.ros.cdk.core.IResolvable accountIds) {
            this.accountIds = accountIds;
            return this;
        }

        /**
         * Sets the value of {@link StackInstancesProps#getAccountIds}
         * @param accountIds Property accountIds: undefined.
         * @return {@code this}
         */
        public Builder accountIds(java.util.List<? extends java.lang.Object> accountIds) {
            this.accountIds = accountIds;
            return this;
        }

        /**
         * Sets the value of {@link StackInstancesProps#getDeploymentTargets}
         * @param deploymentTargets Property deploymentTargets: undefined.
         * @return {@code this}
         */
        public Builder deploymentTargets(com.aliyun.ros.cdk.core.IResolvable deploymentTargets) {
            this.deploymentTargets = deploymentTargets;
            return this;
        }

        /**
         * Sets the value of {@link StackInstancesProps#getDeploymentTargets}
         * @param deploymentTargets Property deploymentTargets: undefined.
         * @return {@code this}
         */
        public Builder deploymentTargets(com.aliyun.ros.cdk.ros.RosStackInstances.DeploymentTargetsProperty deploymentTargets) {
            this.deploymentTargets = deploymentTargets;
            return this;
        }

        /**
         * Sets the value of {@link StackInstancesProps#getDisableRollback}
         * @param disableRollback Property disableRollback: undefined.
         * @return {@code this}
         */
        public Builder disableRollback(java.lang.Boolean disableRollback) {
            this.disableRollback = disableRollback;
            return this;
        }

        /**
         * Sets the value of {@link StackInstancesProps#getDisableRollback}
         * @param disableRollback Property disableRollback: undefined.
         * @return {@code this}
         */
        public Builder disableRollback(com.aliyun.ros.cdk.core.IResolvable disableRollback) {
            this.disableRollback = disableRollback;
            return this;
        }

        /**
         * Sets the value of {@link StackInstancesProps#getOperationDescription}
         * @param operationDescription Property operationDescription: undefined.
         * @return {@code this}
         */
        public Builder operationDescription(java.lang.String operationDescription) {
            this.operationDescription = operationDescription;
            return this;
        }

        /**
         * Sets the value of {@link StackInstancesProps#getOperationDescription}
         * @param operationDescription Property operationDescription: undefined.
         * @return {@code this}
         */
        public Builder operationDescription(com.aliyun.ros.cdk.core.IResolvable operationDescription) {
            this.operationDescription = operationDescription;
            return this;
        }

        /**
         * Sets the value of {@link StackInstancesProps#getOperationPreferences}
         * @param operationPreferences Property operationPreferences: undefined.
         * @return {@code this}
         */
        public Builder operationPreferences(com.aliyun.ros.cdk.core.IResolvable operationPreferences) {
            this.operationPreferences = operationPreferences;
            return this;
        }

        /**
         * Sets the value of {@link StackInstancesProps#getOperationPreferences}
         * @param operationPreferences Property operationPreferences: undefined.
         * @return {@code this}
         */
        public Builder operationPreferences(com.aliyun.ros.cdk.ros.RosStackInstances.OperationPreferencesProperty operationPreferences) {
            this.operationPreferences = operationPreferences;
            return this;
        }

        /**
         * Sets the value of {@link StackInstancesProps#getParameterOverrides}
         * @param parameterOverrides Property parameterOverrides: undefined.
         * @return {@code this}
         */
        public Builder parameterOverrides(com.aliyun.ros.cdk.core.IResolvable parameterOverrides) {
            this.parameterOverrides = parameterOverrides;
            return this;
        }

        /**
         * Sets the value of {@link StackInstancesProps#getParameterOverrides}
         * @param parameterOverrides Property parameterOverrides: undefined.
         * @return {@code this}
         */
        public Builder parameterOverrides(java.util.Map<java.lang.String, ? extends java.lang.Object> parameterOverrides) {
            this.parameterOverrides = parameterOverrides;
            return this;
        }

        /**
         * Sets the value of {@link StackInstancesProps#getRetainStacks}
         * @param retainStacks Property retainStacks: undefined.
         * @return {@code this}
         */
        public Builder retainStacks(java.lang.Boolean retainStacks) {
            this.retainStacks = retainStacks;
            return this;
        }

        /**
         * Sets the value of {@link StackInstancesProps#getRetainStacks}
         * @param retainStacks Property retainStacks: undefined.
         * @return {@code this}
         */
        public Builder retainStacks(com.aliyun.ros.cdk.core.IResolvable retainStacks) {
            this.retainStacks = retainStacks;
            return this;
        }

        /**
         * Sets the value of {@link StackInstancesProps#getTimeoutInMinutes}
         * @param timeoutInMinutes Property timeoutInMinutes: undefined.
         * @return {@code this}
         */
        public Builder timeoutInMinutes(java.lang.Number timeoutInMinutes) {
            this.timeoutInMinutes = timeoutInMinutes;
            return this;
        }

        /**
         * Sets the value of {@link StackInstancesProps#getTimeoutInMinutes}
         * @param timeoutInMinutes Property timeoutInMinutes: undefined.
         * @return {@code this}
         */
        public Builder timeoutInMinutes(com.aliyun.ros.cdk.core.IResolvable timeoutInMinutes) {
            this.timeoutInMinutes = timeoutInMinutes;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link StackInstancesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public StackInstancesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link StackInstancesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements StackInstancesProps {
        private final java.lang.Object regionIds;
        private final java.lang.Object stackGroupName;
        private final java.lang.Object accountIds;
        private final java.lang.Object deploymentTargets;
        private final java.lang.Object disableRollback;
        private final java.lang.Object operationDescription;
        private final java.lang.Object operationPreferences;
        private final java.lang.Object parameterOverrides;
        private final java.lang.Object retainStacks;
        private final java.lang.Object timeoutInMinutes;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.regionIds = software.amazon.jsii.Kernel.get(this, "regionIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.stackGroupName = software.amazon.jsii.Kernel.get(this, "stackGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountIds = software.amazon.jsii.Kernel.get(this, "accountIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deploymentTargets = software.amazon.jsii.Kernel.get(this, "deploymentTargets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.disableRollback = software.amazon.jsii.Kernel.get(this, "disableRollback", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.operationDescription = software.amazon.jsii.Kernel.get(this, "operationDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.operationPreferences = software.amazon.jsii.Kernel.get(this, "operationPreferences", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parameterOverrides = software.amazon.jsii.Kernel.get(this, "parameterOverrides", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.retainStacks = software.amazon.jsii.Kernel.get(this, "retainStacks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeoutInMinutes = software.amazon.jsii.Kernel.get(this, "timeoutInMinutes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.regionIds = java.util.Objects.requireNonNull(builder.regionIds, "regionIds is required");
            this.stackGroupName = java.util.Objects.requireNonNull(builder.stackGroupName, "stackGroupName is required");
            this.accountIds = builder.accountIds;
            this.deploymentTargets = builder.deploymentTargets;
            this.disableRollback = builder.disableRollback;
            this.operationDescription = builder.operationDescription;
            this.operationPreferences = builder.operationPreferences;
            this.parameterOverrides = builder.parameterOverrides;
            this.retainStacks = builder.retainStacks;
            this.timeoutInMinutes = builder.timeoutInMinutes;
        }

        @Override
        public final java.lang.Object getRegionIds() {
            return this.regionIds;
        }

        @Override
        public final java.lang.Object getStackGroupName() {
            return this.stackGroupName;
        }

        @Override
        public final java.lang.Object getAccountIds() {
            return this.accountIds;
        }

        @Override
        public final java.lang.Object getDeploymentTargets() {
            return this.deploymentTargets;
        }

        @Override
        public final java.lang.Object getDisableRollback() {
            return this.disableRollback;
        }

        @Override
        public final java.lang.Object getOperationDescription() {
            return this.operationDescription;
        }

        @Override
        public final java.lang.Object getOperationPreferences() {
            return this.operationPreferences;
        }

        @Override
        public final java.lang.Object getParameterOverrides() {
            return this.parameterOverrides;
        }

        @Override
        public final java.lang.Object getRetainStacks() {
            return this.retainStacks;
        }

        @Override
        public final java.lang.Object getTimeoutInMinutes() {
            return this.timeoutInMinutes;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("regionIds", om.valueToTree(this.getRegionIds()));
            data.set("stackGroupName", om.valueToTree(this.getStackGroupName()));
            if (this.getAccountIds() != null) {
                data.set("accountIds", om.valueToTree(this.getAccountIds()));
            }
            if (this.getDeploymentTargets() != null) {
                data.set("deploymentTargets", om.valueToTree(this.getDeploymentTargets()));
            }
            if (this.getDisableRollback() != null) {
                data.set("disableRollback", om.valueToTree(this.getDisableRollback()));
            }
            if (this.getOperationDescription() != null) {
                data.set("operationDescription", om.valueToTree(this.getOperationDescription()));
            }
            if (this.getOperationPreferences() != null) {
                data.set("operationPreferences", om.valueToTree(this.getOperationPreferences()));
            }
            if (this.getParameterOverrides() != null) {
                data.set("parameterOverrides", om.valueToTree(this.getParameterOverrides()));
            }
            if (this.getRetainStacks() != null) {
                data.set("retainStacks", om.valueToTree(this.getRetainStacks()));
            }
            if (this.getTimeoutInMinutes() != null) {
                data.set("timeoutInMinutes", om.valueToTree(this.getTimeoutInMinutes()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ros.StackInstancesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            StackInstancesProps.Jsii$Proxy that = (StackInstancesProps.Jsii$Proxy) o;

            if (!regionIds.equals(that.regionIds)) return false;
            if (!stackGroupName.equals(that.stackGroupName)) return false;
            if (this.accountIds != null ? !this.accountIds.equals(that.accountIds) : that.accountIds != null) return false;
            if (this.deploymentTargets != null ? !this.deploymentTargets.equals(that.deploymentTargets) : that.deploymentTargets != null) return false;
            if (this.disableRollback != null ? !this.disableRollback.equals(that.disableRollback) : that.disableRollback != null) return false;
            if (this.operationDescription != null ? !this.operationDescription.equals(that.operationDescription) : that.operationDescription != null) return false;
            if (this.operationPreferences != null ? !this.operationPreferences.equals(that.operationPreferences) : that.operationPreferences != null) return false;
            if (this.parameterOverrides != null ? !this.parameterOverrides.equals(that.parameterOverrides) : that.parameterOverrides != null) return false;
            if (this.retainStacks != null ? !this.retainStacks.equals(that.retainStacks) : that.retainStacks != null) return false;
            return this.timeoutInMinutes != null ? this.timeoutInMinutes.equals(that.timeoutInMinutes) : that.timeoutInMinutes == null;
        }

        @Override
        public final int hashCode() {
            int result = this.regionIds.hashCode();
            result = 31 * result + (this.stackGroupName.hashCode());
            result = 31 * result + (this.accountIds != null ? this.accountIds.hashCode() : 0);
            result = 31 * result + (this.deploymentTargets != null ? this.deploymentTargets.hashCode() : 0);
            result = 31 * result + (this.disableRollback != null ? this.disableRollback.hashCode() : 0);
            result = 31 * result + (this.operationDescription != null ? this.operationDescription.hashCode() : 0);
            result = 31 * result + (this.operationPreferences != null ? this.operationPreferences.hashCode() : 0);
            result = 31 * result + (this.parameterOverrides != null ? this.parameterOverrides.hashCode() : 0);
            result = 31 * result + (this.retainStacks != null ? this.retainStacks.hashCode() : 0);
            result = 31 * result + (this.timeoutInMinutes != null ? this.timeoutInMinutes.hashCode() : 0);
            return result;
        }
    }
}
