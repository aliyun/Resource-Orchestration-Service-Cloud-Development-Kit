package com.aliyun.ros.cdk.ros;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ROS::StackInstances</code>, which is used to create stack instances within specified accounts in specified regions.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:17.889Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.RosStackInstances")
public class RosStackInstances extends com.aliyun.ros.cdk.core.RosResource {

    protected RosStackInstances(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosStackInstances(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ros.RosStackInstances.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosStackInstances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.RosStackInstancesProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLastOperationId() {
        return software.amazon.jsii.Kernel.get(this, "attrLastOperationId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStacks() {
        return software.amazon.jsii.Kernel.get(this, "attrStacks", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRegionIds() {
        return software.amazon.jsii.Kernel.get(this, "regionIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRegionIds(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "regionIds", java.util.Objects.requireNonNull(value, "regionIds is required"));
    }

    /**
     */
    public void setRegionIds(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "regionIds", java.util.Objects.requireNonNull(value, "regionIds is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getStackGroupName() {
        return software.amazon.jsii.Kernel.get(this, "stackGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStackGroupName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "stackGroupName", java.util.Objects.requireNonNull(value, "stackGroupName is required"));
    }

    /**
     */
    public void setStackGroupName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "stackGroupName", java.util.Objects.requireNonNull(value, "stackGroupName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAccountIds() {
        return software.amazon.jsii.Kernel.get(this, "accountIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAccountIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "accountIds", value);
    }

    /**
     */
    public void setAccountIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "accountIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeploymentTargets() {
        return software.amazon.jsii.Kernel.get(this, "deploymentTargets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeploymentTargets(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deploymentTargets", value);
    }

    /**
     */
    public void setDeploymentTargets(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ros.RosStackInstances.DeploymentTargetsProperty value) {
        software.amazon.jsii.Kernel.set(this, "deploymentTargets", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDisableRollback() {
        return software.amazon.jsii.Kernel.get(this, "disableRollback", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDisableRollback(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "disableRollback", value);
    }

    /**
     */
    public void setDisableRollback(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "disableRollback", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOperationDescription() {
        return software.amazon.jsii.Kernel.get(this, "operationDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOperationDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "operationDescription", value);
    }

    /**
     */
    public void setOperationDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "operationDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOperationPreferences() {
        return software.amazon.jsii.Kernel.get(this, "operationPreferences", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOperationPreferences(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "operationPreferences", value);
    }

    /**
     */
    public void setOperationPreferences(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ros.RosStackInstances.OperationPreferencesProperty value) {
        software.amazon.jsii.Kernel.set(this, "operationPreferences", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getParameterOverrides() {
        return software.amazon.jsii.Kernel.get(this, "parameterOverrides", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setParameterOverrides(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "parameterOverrides", value);
    }

    /**
     */
    public void setParameterOverrides(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "parameterOverrides", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRetainStacks() {
        return software.amazon.jsii.Kernel.get(this, "retainStacks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRetainStacks(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "retainStacks", value);
    }

    /**
     */
    public void setRetainStacks(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "retainStacks", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTimeoutInMinutes() {
        return software.amazon.jsii.Kernel.get(this, "timeoutInMinutes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTimeoutInMinutes(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "timeoutInMinutes", value);
    }

    /**
     */
    public void setTimeoutInMinutes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "timeoutInMinutes", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.RosStackInstances.DeploymentTargetsProperty")
    @software.amazon.jsii.Jsii.Proxy(DeploymentTargetsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DeploymentTargetsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRdFolderIds() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DeploymentTargetsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DeploymentTargetsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DeploymentTargetsProperty> {
            java.lang.Object rdFolderIds;

            /**
             * Sets the value of {@link DeploymentTargetsProperty#getRdFolderIds}
             * @param rdFolderIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdFolderIds(com.aliyun.ros.cdk.core.IResolvable rdFolderIds) {
                this.rdFolderIds = rdFolderIds;
                return this;
            }

            /**
             * Sets the value of {@link DeploymentTargetsProperty#getRdFolderIds}
             * @param rdFolderIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rdFolderIds(java.util.List<? extends java.lang.Object> rdFolderIds) {
                this.rdFolderIds = rdFolderIds;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DeploymentTargetsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DeploymentTargetsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DeploymentTargetsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DeploymentTargetsProperty {
            private final java.lang.Object rdFolderIds;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.rdFolderIds = software.amazon.jsii.Kernel.get(this, "rdFolderIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.rdFolderIds = builder.rdFolderIds;
            }

            @Override
            public final java.lang.Object getRdFolderIds() {
                return this.rdFolderIds;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getRdFolderIds() != null) {
                    data.set("rdFolderIds", om.valueToTree(this.getRdFolderIds()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ros.RosStackInstances.DeploymentTargetsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DeploymentTargetsProperty.Jsii$Proxy that = (DeploymentTargetsProperty.Jsii$Proxy) o;

                return this.rdFolderIds != null ? this.rdFolderIds.equals(that.rdFolderIds) : that.rdFolderIds == null;
            }

            @Override
            public final int hashCode() {
                int result = this.rdFolderIds != null ? this.rdFolderIds.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.RosStackInstances.OperationPreferencesProperty")
    @software.amazon.jsii.Jsii.Proxy(OperationPreferencesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface OperationPreferencesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFailureToleranceCount() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFailureTolerancePercentage() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxConcurrentCount() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxConcurrentPercentage() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link OperationPreferencesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link OperationPreferencesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<OperationPreferencesProperty> {
            java.lang.Object failureToleranceCount;
            java.lang.Object failureTolerancePercentage;
            java.lang.Object maxConcurrentCount;
            java.lang.Object maxConcurrentPercentage;

            /**
             * Sets the value of {@link OperationPreferencesProperty#getFailureToleranceCount}
             * @param failureToleranceCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder failureToleranceCount(java.lang.Number failureToleranceCount) {
                this.failureToleranceCount = failureToleranceCount;
                return this;
            }

            /**
             * Sets the value of {@link OperationPreferencesProperty#getFailureToleranceCount}
             * @param failureToleranceCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder failureToleranceCount(com.aliyun.ros.cdk.core.IResolvable failureToleranceCount) {
                this.failureToleranceCount = failureToleranceCount;
                return this;
            }

            /**
             * Sets the value of {@link OperationPreferencesProperty#getFailureTolerancePercentage}
             * @param failureTolerancePercentage the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder failureTolerancePercentage(java.lang.Number failureTolerancePercentage) {
                this.failureTolerancePercentage = failureTolerancePercentage;
                return this;
            }

            /**
             * Sets the value of {@link OperationPreferencesProperty#getFailureTolerancePercentage}
             * @param failureTolerancePercentage the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder failureTolerancePercentage(com.aliyun.ros.cdk.core.IResolvable failureTolerancePercentage) {
                this.failureTolerancePercentage = failureTolerancePercentage;
                return this;
            }

            /**
             * Sets the value of {@link OperationPreferencesProperty#getMaxConcurrentCount}
             * @param maxConcurrentCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxConcurrentCount(java.lang.Number maxConcurrentCount) {
                this.maxConcurrentCount = maxConcurrentCount;
                return this;
            }

            /**
             * Sets the value of {@link OperationPreferencesProperty#getMaxConcurrentCount}
             * @param maxConcurrentCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxConcurrentCount(com.aliyun.ros.cdk.core.IResolvable maxConcurrentCount) {
                this.maxConcurrentCount = maxConcurrentCount;
                return this;
            }

            /**
             * Sets the value of {@link OperationPreferencesProperty#getMaxConcurrentPercentage}
             * @param maxConcurrentPercentage the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxConcurrentPercentage(java.lang.Number maxConcurrentPercentage) {
                this.maxConcurrentPercentage = maxConcurrentPercentage;
                return this;
            }

            /**
             * Sets the value of {@link OperationPreferencesProperty#getMaxConcurrentPercentage}
             * @param maxConcurrentPercentage the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxConcurrentPercentage(com.aliyun.ros.cdk.core.IResolvable maxConcurrentPercentage) {
                this.maxConcurrentPercentage = maxConcurrentPercentage;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link OperationPreferencesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public OperationPreferencesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link OperationPreferencesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OperationPreferencesProperty {
            private final java.lang.Object failureToleranceCount;
            private final java.lang.Object failureTolerancePercentage;
            private final java.lang.Object maxConcurrentCount;
            private final java.lang.Object maxConcurrentPercentage;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.failureToleranceCount = software.amazon.jsii.Kernel.get(this, "failureToleranceCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.failureTolerancePercentage = software.amazon.jsii.Kernel.get(this, "failureTolerancePercentage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxConcurrentCount = software.amazon.jsii.Kernel.get(this, "maxConcurrentCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxConcurrentPercentage = software.amazon.jsii.Kernel.get(this, "maxConcurrentPercentage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.failureToleranceCount = builder.failureToleranceCount;
                this.failureTolerancePercentage = builder.failureTolerancePercentage;
                this.maxConcurrentCount = builder.maxConcurrentCount;
                this.maxConcurrentPercentage = builder.maxConcurrentPercentage;
            }

            @Override
            public final java.lang.Object getFailureToleranceCount() {
                return this.failureToleranceCount;
            }

            @Override
            public final java.lang.Object getFailureTolerancePercentage() {
                return this.failureTolerancePercentage;
            }

            @Override
            public final java.lang.Object getMaxConcurrentCount() {
                return this.maxConcurrentCount;
            }

            @Override
            public final java.lang.Object getMaxConcurrentPercentage() {
                return this.maxConcurrentPercentage;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getFailureToleranceCount() != null) {
                    data.set("failureToleranceCount", om.valueToTree(this.getFailureToleranceCount()));
                }
                if (this.getFailureTolerancePercentage() != null) {
                    data.set("failureTolerancePercentage", om.valueToTree(this.getFailureTolerancePercentage()));
                }
                if (this.getMaxConcurrentCount() != null) {
                    data.set("maxConcurrentCount", om.valueToTree(this.getMaxConcurrentCount()));
                }
                if (this.getMaxConcurrentPercentage() != null) {
                    data.set("maxConcurrentPercentage", om.valueToTree(this.getMaxConcurrentPercentage()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ros.RosStackInstances.OperationPreferencesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                OperationPreferencesProperty.Jsii$Proxy that = (OperationPreferencesProperty.Jsii$Proxy) o;

                if (this.failureToleranceCount != null ? !this.failureToleranceCount.equals(that.failureToleranceCount) : that.failureToleranceCount != null) return false;
                if (this.failureTolerancePercentage != null ? !this.failureTolerancePercentage.equals(that.failureTolerancePercentage) : that.failureTolerancePercentage != null) return false;
                if (this.maxConcurrentCount != null ? !this.maxConcurrentCount.equals(that.maxConcurrentCount) : that.maxConcurrentCount != null) return false;
                return this.maxConcurrentPercentage != null ? this.maxConcurrentPercentage.equals(that.maxConcurrentPercentage) : that.maxConcurrentPercentage == null;
            }

            @Override
            public final int hashCode() {
                int result = this.failureToleranceCount != null ? this.failureToleranceCount.hashCode() : 0;
                result = 31 * result + (this.failureTolerancePercentage != null ? this.failureTolerancePercentage.hashCode() : 0);
                result = 31 * result + (this.maxConcurrentCount != null ? this.maxConcurrentCount.hashCode() : 0);
                result = 31 * result + (this.maxConcurrentPercentage != null ? this.maxConcurrentPercentage.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ros.RosStackInstances}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ros.RosStackInstances> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ros.RosStackInstancesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ros.RosStackInstancesProps.Builder();
        }

        /**
         * @return {@code this}
         * @param regionIds This parameter is required.
         */
        public Builder regionIds(final com.aliyun.ros.cdk.core.IResolvable regionIds) {
            this.props.regionIds(regionIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param regionIds This parameter is required.
         */
        public Builder regionIds(final java.util.List<? extends java.lang.Object> regionIds) {
            this.props.regionIds(regionIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param stackGroupName This parameter is required.
         */
        public Builder stackGroupName(final java.lang.String stackGroupName) {
            this.props.stackGroupName(stackGroupName);
            return this;
        }
        /**
         * @return {@code this}
         * @param stackGroupName This parameter is required.
         */
        public Builder stackGroupName(final com.aliyun.ros.cdk.core.IResolvable stackGroupName) {
            this.props.stackGroupName(stackGroupName);
            return this;
        }

        /**
         * @return {@code this}
         * @param accountIds This parameter is required.
         */
        public Builder accountIds(final com.aliyun.ros.cdk.core.IResolvable accountIds) {
            this.props.accountIds(accountIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param accountIds This parameter is required.
         */
        public Builder accountIds(final java.util.List<? extends java.lang.Object> accountIds) {
            this.props.accountIds(accountIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param deploymentTargets This parameter is required.
         */
        public Builder deploymentTargets(final com.aliyun.ros.cdk.core.IResolvable deploymentTargets) {
            this.props.deploymentTargets(deploymentTargets);
            return this;
        }
        /**
         * @return {@code this}
         * @param deploymentTargets This parameter is required.
         */
        public Builder deploymentTargets(final com.aliyun.ros.cdk.ros.RosStackInstances.DeploymentTargetsProperty deploymentTargets) {
            this.props.deploymentTargets(deploymentTargets);
            return this;
        }

        /**
         * @return {@code this}
         * @param disableRollback This parameter is required.
         */
        public Builder disableRollback(final java.lang.Boolean disableRollback) {
            this.props.disableRollback(disableRollback);
            return this;
        }
        /**
         * @return {@code this}
         * @param disableRollback This parameter is required.
         */
        public Builder disableRollback(final com.aliyun.ros.cdk.core.IResolvable disableRollback) {
            this.props.disableRollback(disableRollback);
            return this;
        }

        /**
         * @return {@code this}
         * @param operationDescription This parameter is required.
         */
        public Builder operationDescription(final java.lang.String operationDescription) {
            this.props.operationDescription(operationDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param operationDescription This parameter is required.
         */
        public Builder operationDescription(final com.aliyun.ros.cdk.core.IResolvable operationDescription) {
            this.props.operationDescription(operationDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param operationPreferences This parameter is required.
         */
        public Builder operationPreferences(final com.aliyun.ros.cdk.core.IResolvable operationPreferences) {
            this.props.operationPreferences(operationPreferences);
            return this;
        }
        /**
         * @return {@code this}
         * @param operationPreferences This parameter is required.
         */
        public Builder operationPreferences(final com.aliyun.ros.cdk.ros.RosStackInstances.OperationPreferencesProperty operationPreferences) {
            this.props.operationPreferences(operationPreferences);
            return this;
        }

        /**
         * @return {@code this}
         * @param parameterOverrides This parameter is required.
         */
        public Builder parameterOverrides(final com.aliyun.ros.cdk.core.IResolvable parameterOverrides) {
            this.props.parameterOverrides(parameterOverrides);
            return this;
        }
        /**
         * @return {@code this}
         * @param parameterOverrides This parameter is required.
         */
        public Builder parameterOverrides(final java.util.Map<java.lang.String, ? extends java.lang.Object> parameterOverrides) {
            this.props.parameterOverrides(parameterOverrides);
            return this;
        }

        /**
         * @return {@code this}
         * @param retainStacks This parameter is required.
         */
        public Builder retainStacks(final java.lang.Boolean retainStacks) {
            this.props.retainStacks(retainStacks);
            return this;
        }
        /**
         * @return {@code this}
         * @param retainStacks This parameter is required.
         */
        public Builder retainStacks(final com.aliyun.ros.cdk.core.IResolvable retainStacks) {
            this.props.retainStacks(retainStacks);
            return this;
        }

        /**
         * @return {@code this}
         * @param timeoutInMinutes This parameter is required.
         */
        public Builder timeoutInMinutes(final java.lang.Number timeoutInMinutes) {
            this.props.timeoutInMinutes(timeoutInMinutes);
            return this;
        }
        /**
         * @return {@code this}
         * @param timeoutInMinutes This parameter is required.
         */
        public Builder timeoutInMinutes(final com.aliyun.ros.cdk.core.IResolvable timeoutInMinutes) {
            this.props.timeoutInMinutes(timeoutInMinutes);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ros.RosStackInstances}.
         */
        @Override
        public com.aliyun.ros.cdk.ros.RosStackInstances build() {
            return new com.aliyun.ros.cdk.ros.RosStackInstances(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
