package com.aliyun.ros.cdk.edas;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::EDAS::Application</code>, which is used to create an application in an Elastic Compute Service (ECS) cluster in Enterprise Distributed Application Service (EDAS).
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:10.496Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosApplication")
public class RosApplication extends com.aliyun.ros.cdk.core.RosResource {

    protected RosApplication(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosApplication(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.edas.RosApplication.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosApplication(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.RosApplicationProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppId() {
        return software.amazon.jsii.Kernel.get(this, "attrAppId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getApplicationName() {
        return software.amazon.jsii.Kernel.get(this, "applicationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setApplicationName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "applicationName", java.util.Objects.requireNonNull(value, "applicationName is required"));
    }

    /**
     */
    public void setApplicationName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "applicationName", java.util.Objects.requireNonNull(value, "applicationName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getClusterId() {
        return software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clusterId", java.util.Objects.requireNonNull(value, "clusterId is required"));
    }

    /**
     */
    public void setClusterId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterId", java.util.Objects.requireNonNull(value, "clusterId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBuildPackId() {
        return software.amazon.jsii.Kernel.get(this, "buildPackId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBuildPackId(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "buildPackId", value);
    }

    /**
     */
    public void setBuildPackId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "buildPackId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getComponentIds() {
        return software.amazon.jsii.Kernel.get(this, "componentIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setComponentIds(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "componentIds", value);
    }

    /**
     */
    public void setComponentIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "componentIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeployment() {
        return software.amazon.jsii.Kernel.get(this, "deployment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeployment(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deployment", value);
    }

    /**
     */
    public void setDeployment(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.edas.RosApplication.DeploymentProperty value) {
        software.amazon.jsii.Kernel.set(this, "deployment", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getEcuInfo() {
        return software.amazon.jsii.Kernel.get(this, "ecuInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEcuInfo(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ecuInfo", value);
    }

    /**
     */
    public void setEcuInfo(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ecuInfo", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckUrl() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckUrl(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckUrl", value);
    }

    /**
     */
    public void setHealthCheckUrl(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckUrl", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLogicalRegionId() {
        return software.amazon.jsii.Kernel.get(this, "logicalRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogicalRegionId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "logicalRegionId", value);
    }

    /**
     */
    public void setLogicalRegionId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logicalRegionId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPackageType() {
        return software.amazon.jsii.Kernel.get(this, "packageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPackageType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "packageType", value);
    }

    /**
     */
    public void setPackageType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "packageType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosApplication.DeploymentProperty")
    @software.amazon.jsii.Jsii.Proxy(DeploymentProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DeploymentProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPackageVersion();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getWarUrl();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAppEnv() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBatch() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBatchWaitTime() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDesc() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGray() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGroupId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReleaseType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTrafficControlStrategy() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DeploymentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DeploymentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DeploymentProperty> {
            java.lang.Object packageVersion;
            java.lang.Object warUrl;
            java.lang.Object appEnv;
            java.lang.Object batch;
            java.lang.Object batchWaitTime;
            java.lang.Object desc;
            java.lang.Object gray;
            java.lang.Object groupId;
            java.lang.Object releaseType;
            java.lang.Object trafficControlStrategy;

            /**
             * Sets the value of {@link DeploymentProperty#getPackageVersion}
             * @param packageVersion the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder packageVersion(java.lang.String packageVersion) {
                this.packageVersion = packageVersion;
                return this;
            }

            /**
             * Sets the value of {@link DeploymentProperty#getPackageVersion}
             * @param packageVersion the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder packageVersion(com.aliyun.ros.cdk.core.IResolvable packageVersion) {
                this.packageVersion = packageVersion;
                return this;
            }

            /**
             * Sets the value of {@link DeploymentProperty#getWarUrl}
             * @param warUrl the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder warUrl(java.lang.String warUrl) {
                this.warUrl = warUrl;
                return this;
            }

            /**
             * Sets the value of {@link DeploymentProperty#getWarUrl}
             * @param warUrl the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder warUrl(com.aliyun.ros.cdk.core.IResolvable warUrl) {
                this.warUrl = warUrl;
                return this;
            }

            /**
             * Sets the value of {@link DeploymentProperty#getAppEnv}
             * @param appEnv the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder appEnv(java.lang.String appEnv) {
                this.appEnv = appEnv;
                return this;
            }

            /**
             * Sets the value of {@link DeploymentProperty#getAppEnv}
             * @param appEnv the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder appEnv(com.aliyun.ros.cdk.core.IResolvable appEnv) {
                this.appEnv = appEnv;
                return this;
            }

            /**
             * Sets the value of {@link DeploymentProperty#getBatch}
             * @param batch the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder batch(java.lang.Number batch) {
                this.batch = batch;
                return this;
            }

            /**
             * Sets the value of {@link DeploymentProperty#getBatch}
             * @param batch the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder batch(com.aliyun.ros.cdk.core.IResolvable batch) {
                this.batch = batch;
                return this;
            }

            /**
             * Sets the value of {@link DeploymentProperty#getBatchWaitTime}
             * @param batchWaitTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder batchWaitTime(java.lang.Number batchWaitTime) {
                this.batchWaitTime = batchWaitTime;
                return this;
            }

            /**
             * Sets the value of {@link DeploymentProperty#getBatchWaitTime}
             * @param batchWaitTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder batchWaitTime(com.aliyun.ros.cdk.core.IResolvable batchWaitTime) {
                this.batchWaitTime = batchWaitTime;
                return this;
            }

            /**
             * Sets the value of {@link DeploymentProperty#getDesc}
             * @param desc the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder desc(java.lang.String desc) {
                this.desc = desc;
                return this;
            }

            /**
             * Sets the value of {@link DeploymentProperty#getDesc}
             * @param desc the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder desc(com.aliyun.ros.cdk.core.IResolvable desc) {
                this.desc = desc;
                return this;
            }

            /**
             * Sets the value of {@link DeploymentProperty#getGray}
             * @param gray the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gray(java.lang.Boolean gray) {
                this.gray = gray;
                return this;
            }

            /**
             * Sets the value of {@link DeploymentProperty#getGray}
             * @param gray the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gray(com.aliyun.ros.cdk.core.IResolvable gray) {
                this.gray = gray;
                return this;
            }

            /**
             * Sets the value of {@link DeploymentProperty#getGroupId}
             * @param groupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder groupId(java.lang.String groupId) {
                this.groupId = groupId;
                return this;
            }

            /**
             * Sets the value of {@link DeploymentProperty#getGroupId}
             * @param groupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
                this.groupId = groupId;
                return this;
            }

            /**
             * Sets the value of {@link DeploymentProperty#getReleaseType}
             * @param releaseType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder releaseType(java.lang.Number releaseType) {
                this.releaseType = releaseType;
                return this;
            }

            /**
             * Sets the value of {@link DeploymentProperty#getReleaseType}
             * @param releaseType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder releaseType(com.aliyun.ros.cdk.core.IResolvable releaseType) {
                this.releaseType = releaseType;
                return this;
            }

            /**
             * Sets the value of {@link DeploymentProperty#getTrafficControlStrategy}
             * @param trafficControlStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder trafficControlStrategy(java.lang.String trafficControlStrategy) {
                this.trafficControlStrategy = trafficControlStrategy;
                return this;
            }

            /**
             * Sets the value of {@link DeploymentProperty#getTrafficControlStrategy}
             * @param trafficControlStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder trafficControlStrategy(com.aliyun.ros.cdk.core.IResolvable trafficControlStrategy) {
                this.trafficControlStrategy = trafficControlStrategy;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DeploymentProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DeploymentProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DeploymentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DeploymentProperty {
            private final java.lang.Object packageVersion;
            private final java.lang.Object warUrl;
            private final java.lang.Object appEnv;
            private final java.lang.Object batch;
            private final java.lang.Object batchWaitTime;
            private final java.lang.Object desc;
            private final java.lang.Object gray;
            private final java.lang.Object groupId;
            private final java.lang.Object releaseType;
            private final java.lang.Object trafficControlStrategy;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.packageVersion = software.amazon.jsii.Kernel.get(this, "packageVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.warUrl = software.amazon.jsii.Kernel.get(this, "warUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.appEnv = software.amazon.jsii.Kernel.get(this, "appEnv", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.batch = software.amazon.jsii.Kernel.get(this, "batch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.batchWaitTime = software.amazon.jsii.Kernel.get(this, "batchWaitTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.desc = software.amazon.jsii.Kernel.get(this, "desc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.gray = software.amazon.jsii.Kernel.get(this, "gray", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.releaseType = software.amazon.jsii.Kernel.get(this, "releaseType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.trafficControlStrategy = software.amazon.jsii.Kernel.get(this, "trafficControlStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.packageVersion = java.util.Objects.requireNonNull(builder.packageVersion, "packageVersion is required");
                this.warUrl = java.util.Objects.requireNonNull(builder.warUrl, "warUrl is required");
                this.appEnv = builder.appEnv;
                this.batch = builder.batch;
                this.batchWaitTime = builder.batchWaitTime;
                this.desc = builder.desc;
                this.gray = builder.gray;
                this.groupId = builder.groupId;
                this.releaseType = builder.releaseType;
                this.trafficControlStrategy = builder.trafficControlStrategy;
            }

            @Override
            public final java.lang.Object getPackageVersion() {
                return this.packageVersion;
            }

            @Override
            public final java.lang.Object getWarUrl() {
                return this.warUrl;
            }

            @Override
            public final java.lang.Object getAppEnv() {
                return this.appEnv;
            }

            @Override
            public final java.lang.Object getBatch() {
                return this.batch;
            }

            @Override
            public final java.lang.Object getBatchWaitTime() {
                return this.batchWaitTime;
            }

            @Override
            public final java.lang.Object getDesc() {
                return this.desc;
            }

            @Override
            public final java.lang.Object getGray() {
                return this.gray;
            }

            @Override
            public final java.lang.Object getGroupId() {
                return this.groupId;
            }

            @Override
            public final java.lang.Object getReleaseType() {
                return this.releaseType;
            }

            @Override
            public final java.lang.Object getTrafficControlStrategy() {
                return this.trafficControlStrategy;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("packageVersion", om.valueToTree(this.getPackageVersion()));
                data.set("warUrl", om.valueToTree(this.getWarUrl()));
                if (this.getAppEnv() != null) {
                    data.set("appEnv", om.valueToTree(this.getAppEnv()));
                }
                if (this.getBatch() != null) {
                    data.set("batch", om.valueToTree(this.getBatch()));
                }
                if (this.getBatchWaitTime() != null) {
                    data.set("batchWaitTime", om.valueToTree(this.getBatchWaitTime()));
                }
                if (this.getDesc() != null) {
                    data.set("desc", om.valueToTree(this.getDesc()));
                }
                if (this.getGray() != null) {
                    data.set("gray", om.valueToTree(this.getGray()));
                }
                if (this.getGroupId() != null) {
                    data.set("groupId", om.valueToTree(this.getGroupId()));
                }
                if (this.getReleaseType() != null) {
                    data.set("releaseType", om.valueToTree(this.getReleaseType()));
                }
                if (this.getTrafficControlStrategy() != null) {
                    data.set("trafficControlStrategy", om.valueToTree(this.getTrafficControlStrategy()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosApplication.DeploymentProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DeploymentProperty.Jsii$Proxy that = (DeploymentProperty.Jsii$Proxy) o;

                if (!packageVersion.equals(that.packageVersion)) return false;
                if (!warUrl.equals(that.warUrl)) return false;
                if (this.appEnv != null ? !this.appEnv.equals(that.appEnv) : that.appEnv != null) return false;
                if (this.batch != null ? !this.batch.equals(that.batch) : that.batch != null) return false;
                if (this.batchWaitTime != null ? !this.batchWaitTime.equals(that.batchWaitTime) : that.batchWaitTime != null) return false;
                if (this.desc != null ? !this.desc.equals(that.desc) : that.desc != null) return false;
                if (this.gray != null ? !this.gray.equals(that.gray) : that.gray != null) return false;
                if (this.groupId != null ? !this.groupId.equals(that.groupId) : that.groupId != null) return false;
                if (this.releaseType != null ? !this.releaseType.equals(that.releaseType) : that.releaseType != null) return false;
                return this.trafficControlStrategy != null ? this.trafficControlStrategy.equals(that.trafficControlStrategy) : that.trafficControlStrategy == null;
            }

            @Override
            public final int hashCode() {
                int result = this.packageVersion.hashCode();
                result = 31 * result + (this.warUrl.hashCode());
                result = 31 * result + (this.appEnv != null ? this.appEnv.hashCode() : 0);
                result = 31 * result + (this.batch != null ? this.batch.hashCode() : 0);
                result = 31 * result + (this.batchWaitTime != null ? this.batchWaitTime.hashCode() : 0);
                result = 31 * result + (this.desc != null ? this.desc.hashCode() : 0);
                result = 31 * result + (this.gray != null ? this.gray.hashCode() : 0);
                result = 31 * result + (this.groupId != null ? this.groupId.hashCode() : 0);
                result = 31 * result + (this.releaseType != null ? this.releaseType.hashCode() : 0);
                result = 31 * result + (this.trafficControlStrategy != null ? this.trafficControlStrategy.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.edas.RosApplication}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.edas.RosApplication> {
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
        private final com.aliyun.ros.cdk.edas.RosApplicationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.edas.RosApplicationProps.Builder();
        }

        /**
         * @return {@code this}
         * @param applicationName This parameter is required.
         */
        public Builder applicationName(final java.lang.String applicationName) {
            this.props.applicationName(applicationName);
            return this;
        }
        /**
         * @return {@code this}
         * @param applicationName This parameter is required.
         */
        public Builder applicationName(final com.aliyun.ros.cdk.core.IResolvable applicationName) {
            this.props.applicationName(applicationName);
            return this;
        }

        /**
         * @return {@code this}
         * @param clusterId This parameter is required.
         */
        public Builder clusterId(final java.lang.String clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterId This parameter is required.
         */
        public Builder clusterId(final com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }

        /**
         * @return {@code this}
         * @param buildPackId This parameter is required.
         */
        public Builder buildPackId(final java.lang.Number buildPackId) {
            this.props.buildPackId(buildPackId);
            return this;
        }
        /**
         * @return {@code this}
         * @param buildPackId This parameter is required.
         */
        public Builder buildPackId(final com.aliyun.ros.cdk.core.IResolvable buildPackId) {
            this.props.buildPackId(buildPackId);
            return this;
        }

        /**
         * @return {@code this}
         * @param componentIds This parameter is required.
         */
        public Builder componentIds(final java.lang.String componentIds) {
            this.props.componentIds(componentIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param componentIds This parameter is required.
         */
        public Builder componentIds(final com.aliyun.ros.cdk.core.IResolvable componentIds) {
            this.props.componentIds(componentIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param deployment This parameter is required.
         */
        public Builder deployment(final com.aliyun.ros.cdk.core.IResolvable deployment) {
            this.props.deployment(deployment);
            return this;
        }
        /**
         * @return {@code this}
         * @param deployment This parameter is required.
         */
        public Builder deployment(final com.aliyun.ros.cdk.edas.RosApplication.DeploymentProperty deployment) {
            this.props.deployment(deployment);
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
         * @param ecuInfo This parameter is required.
         */
        public Builder ecuInfo(final java.lang.String ecuInfo) {
            this.props.ecuInfo(ecuInfo);
            return this;
        }
        /**
         * @return {@code this}
         * @param ecuInfo This parameter is required.
         */
        public Builder ecuInfo(final com.aliyun.ros.cdk.core.IResolvable ecuInfo) {
            this.props.ecuInfo(ecuInfo);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheckUrl This parameter is required.
         */
        public Builder healthCheckUrl(final java.lang.String healthCheckUrl) {
            this.props.healthCheckUrl(healthCheckUrl);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheckUrl This parameter is required.
         */
        public Builder healthCheckUrl(final com.aliyun.ros.cdk.core.IResolvable healthCheckUrl) {
            this.props.healthCheckUrl(healthCheckUrl);
            return this;
        }

        /**
         * @return {@code this}
         * @param logicalRegionId This parameter is required.
         */
        public Builder logicalRegionId(final java.lang.String logicalRegionId) {
            this.props.logicalRegionId(logicalRegionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param logicalRegionId This parameter is required.
         */
        public Builder logicalRegionId(final com.aliyun.ros.cdk.core.IResolvable logicalRegionId) {
            this.props.logicalRegionId(logicalRegionId);
            return this;
        }

        /**
         * @return {@code this}
         * @param packageType This parameter is required.
         */
        public Builder packageType(final java.lang.String packageType) {
            this.props.packageType(packageType);
            return this;
        }
        /**
         * @return {@code this}
         * @param packageType This parameter is required.
         */
        public Builder packageType(final com.aliyun.ros.cdk.core.IResolvable packageType) {
            this.props.packageType(packageType);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.edas.RosApplication}.
         */
        @Override
        public com.aliyun.ros.cdk.edas.RosApplication build() {
            return new com.aliyun.ros.cdk.edas.RosApplication(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
