package com.aliyun.ros.cdk.polardb;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::POLARDB::Application</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:28:24.478Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.RosApplication")
public class RosApplication extends com.aliyun.ros.cdk.core.RosResource {

    protected RosApplication(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosApplication(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.polardb.RosApplication.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosApplication(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.RosApplicationProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrApplicationId() {
        return software.amazon.jsii.Kernel.get(this, "attrApplicationId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getApplicationType() {
        return software.amazon.jsii.Kernel.get(this, "applicationType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setApplicationType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "applicationType", java.util.Objects.requireNonNull(value, "applicationType is required"));
    }

    /**
     */
    public void setApplicationType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "applicationType", java.util.Objects.requireNonNull(value, "applicationType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getArchitecture() {
        return software.amazon.jsii.Kernel.get(this, "architecture", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setArchitecture(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "architecture", java.util.Objects.requireNonNull(value, "architecture is required"));
    }

    /**
     */
    public void setArchitecture(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "architecture", java.util.Objects.requireNonNull(value, "architecture is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId() {
        return software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbClusterId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbClusterId", java.util.Objects.requireNonNull(value, "dbClusterId is required"));
    }

    /**
     */
    public void setDbClusterId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbClusterId", java.util.Objects.requireNonNull(value, "dbClusterId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoCreatePolarFs() {
        return software.amazon.jsii.Kernel.get(this, "autoCreatePolarFs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoCreatePolarFs(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoCreatePolarFs", value);
    }

    /**
     */
    public void setAutoCreatePolarFs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoCreatePolarFs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getComponents() {
        return software.amazon.jsii.Kernel.get(this, "components", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setComponents(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "components", value);
    }

    /**
     */
    public void setComponents(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.polardb.RosApplication.ComponentsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.polardb.RosApplication.ComponentsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "components", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPayType() {
        return software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPayType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "payType", value);
    }

    /**
     */
    public void setPayType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "payType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPolarFsInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "polarFsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPolarFsInstanceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "polarFsInstanceId", value);
    }

    /**
     */
    public void setPolarFsInstanceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "polarFsInstanceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", value);
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpList() {
        return software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityIpList(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityIpList", value);
    }

    /**
     */
    public void setSecurityIpList(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityIpList", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", value);
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", value);
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", value);
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.RosApplication.ComponentsProperty")
    @software.amazon.jsii.Jsii.Proxy(ComponentsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ComponentsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getComponentClass() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getComponentMaxReplica() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getComponentReplica() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getComponentType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getScaleMax() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getScaleMin() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroups() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpArrayName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpList() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ComponentsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ComponentsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ComponentsProperty> {
            java.lang.Object componentClass;
            java.lang.Object componentMaxReplica;
            java.lang.Object componentReplica;
            java.lang.Object componentType;
            java.lang.Object scaleMax;
            java.lang.Object scaleMin;
            java.lang.Object securityGroups;
            java.lang.Object securityIpArrayName;
            java.lang.Object securityIpList;
            java.lang.Object securityIpType;

            /**
             * Sets the value of {@link ComponentsProperty#getComponentClass}
             * @param componentClass the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder componentClass(java.lang.String componentClass) {
                this.componentClass = componentClass;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getComponentClass}
             * @param componentClass the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder componentClass(com.aliyun.ros.cdk.core.IResolvable componentClass) {
                this.componentClass = componentClass;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getComponentMaxReplica}
             * @param componentMaxReplica the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder componentMaxReplica(java.lang.Number componentMaxReplica) {
                this.componentMaxReplica = componentMaxReplica;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getComponentMaxReplica}
             * @param componentMaxReplica the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder componentMaxReplica(com.aliyun.ros.cdk.core.IResolvable componentMaxReplica) {
                this.componentMaxReplica = componentMaxReplica;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getComponentReplica}
             * @param componentReplica the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder componentReplica(java.lang.String componentReplica) {
                this.componentReplica = componentReplica;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getComponentReplica}
             * @param componentReplica the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder componentReplica(com.aliyun.ros.cdk.core.IResolvable componentReplica) {
                this.componentReplica = componentReplica;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getComponentType}
             * @param componentType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder componentType(java.lang.String componentType) {
                this.componentType = componentType;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getComponentType}
             * @param componentType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder componentType(com.aliyun.ros.cdk.core.IResolvable componentType) {
                this.componentType = componentType;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getScaleMax}
             * @param scaleMax the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scaleMax(java.lang.Number scaleMax) {
                this.scaleMax = scaleMax;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getScaleMax}
             * @param scaleMax the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scaleMax(com.aliyun.ros.cdk.core.IResolvable scaleMax) {
                this.scaleMax = scaleMax;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getScaleMin}
             * @param scaleMin the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scaleMin(java.lang.Number scaleMin) {
                this.scaleMin = scaleMin;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getScaleMin}
             * @param scaleMin the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scaleMin(com.aliyun.ros.cdk.core.IResolvable scaleMin) {
                this.scaleMin = scaleMin;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getSecurityGroups}
             * @param securityGroups the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroups(java.lang.String securityGroups) {
                this.securityGroups = securityGroups;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getSecurityGroups}
             * @param securityGroups the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroups(com.aliyun.ros.cdk.core.IResolvable securityGroups) {
                this.securityGroups = securityGroups;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getSecurityIpArrayName}
             * @param securityIpArrayName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityIpArrayName(java.lang.String securityIpArrayName) {
                this.securityIpArrayName = securityIpArrayName;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getSecurityIpArrayName}
             * @param securityIpArrayName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityIpArrayName(com.aliyun.ros.cdk.core.IResolvable securityIpArrayName) {
                this.securityIpArrayName = securityIpArrayName;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getSecurityIpList}
             * @param securityIpList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityIpList(java.lang.String securityIpList) {
                this.securityIpList = securityIpList;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getSecurityIpList}
             * @param securityIpList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityIpList(com.aliyun.ros.cdk.core.IResolvable securityIpList) {
                this.securityIpList = securityIpList;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getSecurityIpType}
             * @param securityIpType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityIpType(java.lang.String securityIpType) {
                this.securityIpType = securityIpType;
                return this;
            }

            /**
             * Sets the value of {@link ComponentsProperty#getSecurityIpType}
             * @param securityIpType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityIpType(com.aliyun.ros.cdk.core.IResolvable securityIpType) {
                this.securityIpType = securityIpType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ComponentsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ComponentsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ComponentsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ComponentsProperty {
            private final java.lang.Object componentClass;
            private final java.lang.Object componentMaxReplica;
            private final java.lang.Object componentReplica;
            private final java.lang.Object componentType;
            private final java.lang.Object scaleMax;
            private final java.lang.Object scaleMin;
            private final java.lang.Object securityGroups;
            private final java.lang.Object securityIpArrayName;
            private final java.lang.Object securityIpList;
            private final java.lang.Object securityIpType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.componentClass = software.amazon.jsii.Kernel.get(this, "componentClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.componentMaxReplica = software.amazon.jsii.Kernel.get(this, "componentMaxReplica", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.componentReplica = software.amazon.jsii.Kernel.get(this, "componentReplica", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.componentType = software.amazon.jsii.Kernel.get(this, "componentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.scaleMax = software.amazon.jsii.Kernel.get(this, "scaleMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.scaleMin = software.amazon.jsii.Kernel.get(this, "scaleMin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.securityGroups = software.amazon.jsii.Kernel.get(this, "securityGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.securityIpArrayName = software.amazon.jsii.Kernel.get(this, "securityIpArrayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.securityIpList = software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.securityIpType = software.amazon.jsii.Kernel.get(this, "securityIpType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.componentClass = builder.componentClass;
                this.componentMaxReplica = builder.componentMaxReplica;
                this.componentReplica = builder.componentReplica;
                this.componentType = builder.componentType;
                this.scaleMax = builder.scaleMax;
                this.scaleMin = builder.scaleMin;
                this.securityGroups = builder.securityGroups;
                this.securityIpArrayName = builder.securityIpArrayName;
                this.securityIpList = builder.securityIpList;
                this.securityIpType = builder.securityIpType;
            }

            @Override
            public final java.lang.Object getComponentClass() {
                return this.componentClass;
            }

            @Override
            public final java.lang.Object getComponentMaxReplica() {
                return this.componentMaxReplica;
            }

            @Override
            public final java.lang.Object getComponentReplica() {
                return this.componentReplica;
            }

            @Override
            public final java.lang.Object getComponentType() {
                return this.componentType;
            }

            @Override
            public final java.lang.Object getScaleMax() {
                return this.scaleMax;
            }

            @Override
            public final java.lang.Object getScaleMin() {
                return this.scaleMin;
            }

            @Override
            public final java.lang.Object getSecurityGroups() {
                return this.securityGroups;
            }

            @Override
            public final java.lang.Object getSecurityIpArrayName() {
                return this.securityIpArrayName;
            }

            @Override
            public final java.lang.Object getSecurityIpList() {
                return this.securityIpList;
            }

            @Override
            public final java.lang.Object getSecurityIpType() {
                return this.securityIpType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getComponentClass() != null) {
                    data.set("componentClass", om.valueToTree(this.getComponentClass()));
                }
                if (this.getComponentMaxReplica() != null) {
                    data.set("componentMaxReplica", om.valueToTree(this.getComponentMaxReplica()));
                }
                if (this.getComponentReplica() != null) {
                    data.set("componentReplica", om.valueToTree(this.getComponentReplica()));
                }
                if (this.getComponentType() != null) {
                    data.set("componentType", om.valueToTree(this.getComponentType()));
                }
                if (this.getScaleMax() != null) {
                    data.set("scaleMax", om.valueToTree(this.getScaleMax()));
                }
                if (this.getScaleMin() != null) {
                    data.set("scaleMin", om.valueToTree(this.getScaleMin()));
                }
                if (this.getSecurityGroups() != null) {
                    data.set("securityGroups", om.valueToTree(this.getSecurityGroups()));
                }
                if (this.getSecurityIpArrayName() != null) {
                    data.set("securityIpArrayName", om.valueToTree(this.getSecurityIpArrayName()));
                }
                if (this.getSecurityIpList() != null) {
                    data.set("securityIpList", om.valueToTree(this.getSecurityIpList()));
                }
                if (this.getSecurityIpType() != null) {
                    data.set("securityIpType", om.valueToTree(this.getSecurityIpType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.RosApplication.ComponentsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ComponentsProperty.Jsii$Proxy that = (ComponentsProperty.Jsii$Proxy) o;

                if (this.componentClass != null ? !this.componentClass.equals(that.componentClass) : that.componentClass != null) return false;
                if (this.componentMaxReplica != null ? !this.componentMaxReplica.equals(that.componentMaxReplica) : that.componentMaxReplica != null) return false;
                if (this.componentReplica != null ? !this.componentReplica.equals(that.componentReplica) : that.componentReplica != null) return false;
                if (this.componentType != null ? !this.componentType.equals(that.componentType) : that.componentType != null) return false;
                if (this.scaleMax != null ? !this.scaleMax.equals(that.scaleMax) : that.scaleMax != null) return false;
                if (this.scaleMin != null ? !this.scaleMin.equals(that.scaleMin) : that.scaleMin != null) return false;
                if (this.securityGroups != null ? !this.securityGroups.equals(that.securityGroups) : that.securityGroups != null) return false;
                if (this.securityIpArrayName != null ? !this.securityIpArrayName.equals(that.securityIpArrayName) : that.securityIpArrayName != null) return false;
                if (this.securityIpList != null ? !this.securityIpList.equals(that.securityIpList) : that.securityIpList != null) return false;
                return this.securityIpType != null ? this.securityIpType.equals(that.securityIpType) : that.securityIpType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.componentClass != null ? this.componentClass.hashCode() : 0;
                result = 31 * result + (this.componentMaxReplica != null ? this.componentMaxReplica.hashCode() : 0);
                result = 31 * result + (this.componentReplica != null ? this.componentReplica.hashCode() : 0);
                result = 31 * result + (this.componentType != null ? this.componentType.hashCode() : 0);
                result = 31 * result + (this.scaleMax != null ? this.scaleMax.hashCode() : 0);
                result = 31 * result + (this.scaleMin != null ? this.scaleMin.hashCode() : 0);
                result = 31 * result + (this.securityGroups != null ? this.securityGroups.hashCode() : 0);
                result = 31 * result + (this.securityIpArrayName != null ? this.securityIpArrayName.hashCode() : 0);
                result = 31 * result + (this.securityIpList != null ? this.securityIpList.hashCode() : 0);
                result = 31 * result + (this.securityIpType != null ? this.securityIpType.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.polardb.RosApplication}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.polardb.RosApplication> {
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
        private final com.aliyun.ros.cdk.polardb.RosApplicationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.polardb.RosApplicationProps.Builder();
        }

        /**
         * @return {@code this}
         * @param applicationType This parameter is required.
         */
        public Builder applicationType(final java.lang.String applicationType) {
            this.props.applicationType(applicationType);
            return this;
        }
        /**
         * @return {@code this}
         * @param applicationType This parameter is required.
         */
        public Builder applicationType(final com.aliyun.ros.cdk.core.IResolvable applicationType) {
            this.props.applicationType(applicationType);
            return this;
        }

        /**
         * @return {@code this}
         * @param architecture This parameter is required.
         */
        public Builder architecture(final java.lang.String architecture) {
            this.props.architecture(architecture);
            return this;
        }
        /**
         * @return {@code this}
         * @param architecture This parameter is required.
         */
        public Builder architecture(final com.aliyun.ros.cdk.core.IResolvable architecture) {
            this.props.architecture(architecture);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbClusterId This parameter is required.
         */
        public Builder dbClusterId(final java.lang.String dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbClusterId This parameter is required.
         */
        public Builder dbClusterId(final com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoCreatePolarFs This parameter is required.
         */
        public Builder autoCreatePolarFs(final java.lang.Boolean autoCreatePolarFs) {
            this.props.autoCreatePolarFs(autoCreatePolarFs);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoCreatePolarFs This parameter is required.
         */
        public Builder autoCreatePolarFs(final com.aliyun.ros.cdk.core.IResolvable autoCreatePolarFs) {
            this.props.autoCreatePolarFs(autoCreatePolarFs);
            return this;
        }

        /**
         * @return {@code this}
         * @param components This parameter is required.
         */
        public Builder components(final com.aliyun.ros.cdk.core.IResolvable components) {
            this.props.components(components);
            return this;
        }
        /**
         * @return {@code this}
         * @param components This parameter is required.
         */
        public Builder components(final java.util.List<? extends java.lang.Object> components) {
            this.props.components(components);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param payType This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * @return {@code this}
         * @param payType This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * @return {@code this}
         * @param polarFsInstanceId This parameter is required.
         */
        public Builder polarFsInstanceId(final java.lang.String polarFsInstanceId) {
            this.props.polarFsInstanceId(polarFsInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param polarFsInstanceId This parameter is required.
         */
        public Builder polarFsInstanceId(final com.aliyun.ros.cdk.core.IResolvable polarFsInstanceId) {
            this.props.polarFsInstanceId(polarFsInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityIpList This parameter is required.
         */
        public Builder securityIpList(final java.lang.String securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityIpList This parameter is required.
         */
        public Builder securityIpList(final com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.polardb.RosApplication}.
         */
        @Override
        public com.aliyun.ros.cdk.polardb.RosApplication build() {
            return new com.aliyun.ros.cdk.polardb.RosApplication(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
