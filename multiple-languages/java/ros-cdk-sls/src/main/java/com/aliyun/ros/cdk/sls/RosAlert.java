package com.aliyun.ros.cdk.sls;

/**
 * A ROS template type:  `ALIYUN::SLS::Alert`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.68.0 (build b45f2f6)", date = "2022-09-23T09:09:11.746Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosAlert")
public class RosAlert extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAlert(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAlert(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.sls.RosAlert.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::SLS::Alert`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAlert(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.RosAlertProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDetail() {
        return software.amazon.jsii.Kernel.get(this, "detail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDetail(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.RosAlert.DetailProperty value) {
        software.amazon.jsii.Kernel.set(this, "detail", java.util.Objects.requireNonNull(value, "detail is required"));
    }

    /**
     */
    public void setDetail(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "detail", java.util.Objects.requireNonNull(value, "detail is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getProject() {
        return software.amazon.jsii.Kernel.get(this, "project", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProject(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "project", java.util.Objects.requireNonNull(value, "project is required"));
    }

    /**
     */
    public void setProject(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "project", java.util.Objects.requireNonNull(value, "project is required"));
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosAlert.AnnotationsProperty")
    @software.amazon.jsii.Jsii.Proxy(AnnotationsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AnnotationsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getValue();

        /**
         * @return a {@link Builder} of {@link AnnotationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AnnotationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AnnotationsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link AnnotationsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link AnnotationsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link AnnotationsProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link AnnotationsProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AnnotationsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AnnotationsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AnnotationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AnnotationsProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.value = java.util.Objects.requireNonNull(builder.value, "value is required");
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                data.set("value", om.valueToTree(this.getValue()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosAlert.AnnotationsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AnnotationsProperty.Jsii$Proxy that = (AnnotationsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.value.equals(that.value);
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosAlert.ConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(ConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDashboard();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getQueryList();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAnnotations() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAutoAnnotation() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCondition() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGroupConfiguration() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getJoinConfigurations() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLabels() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMuteUntil() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNoDataFire() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNoDataSeverity() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNotificationList() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNotifyThreshold() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPolicyConfiguration() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSendResolved() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSeverityConfigurations() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getThreshold() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getThrottling() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVersion() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ConfigurationProperty> {
            java.lang.Object dashboard;
            java.lang.Object queryList;
            java.lang.Object annotations;
            java.lang.Object autoAnnotation;
            java.lang.Object condition;
            java.lang.Object groupConfiguration;
            java.lang.Object joinConfigurations;
            java.lang.Object labels;
            java.lang.Object muteUntil;
            java.lang.Object noDataFire;
            java.lang.Object noDataSeverity;
            java.lang.Object notificationList;
            java.lang.Object notifyThreshold;
            java.lang.Object policyConfiguration;
            java.lang.Object sendResolved;
            java.lang.Object severityConfigurations;
            java.lang.Object threshold;
            java.lang.Object throttling;
            java.lang.Object type;
            java.lang.Object version;

            /**
             * Sets the value of {@link ConfigurationProperty#getDashboard}
             * @param dashboard the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dashboard(java.lang.String dashboard) {
                this.dashboard = dashboard;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getDashboard}
             * @param dashboard the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dashboard(com.aliyun.ros.cdk.core.IResolvable dashboard) {
                this.dashboard = dashboard;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getQueryList}
             * @param queryList the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queryList(com.aliyun.ros.cdk.core.IResolvable queryList) {
                this.queryList = queryList;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getQueryList}
             * @param queryList the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queryList(java.util.List<? extends java.lang.Object> queryList) {
                this.queryList = queryList;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getAnnotations}
             * @param annotations the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder annotations(com.aliyun.ros.cdk.core.IResolvable annotations) {
                this.annotations = annotations;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getAnnotations}
             * @param annotations the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder annotations(java.util.List<? extends java.lang.Object> annotations) {
                this.annotations = annotations;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getAutoAnnotation}
             * @param autoAnnotation the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoAnnotation(java.lang.Boolean autoAnnotation) {
                this.autoAnnotation = autoAnnotation;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getAutoAnnotation}
             * @param autoAnnotation the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoAnnotation(com.aliyun.ros.cdk.core.IResolvable autoAnnotation) {
                this.autoAnnotation = autoAnnotation;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getCondition}
             * @param condition the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder condition(java.lang.String condition) {
                this.condition = condition;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getCondition}
             * @param condition the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder condition(com.aliyun.ros.cdk.core.IResolvable condition) {
                this.condition = condition;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getGroupConfiguration}
             * @param groupConfiguration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder groupConfiguration(com.aliyun.ros.cdk.core.IResolvable groupConfiguration) {
                this.groupConfiguration = groupConfiguration;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getGroupConfiguration}
             * @param groupConfiguration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder groupConfiguration(com.aliyun.ros.cdk.sls.RosAlert.GroupConfigurationProperty groupConfiguration) {
                this.groupConfiguration = groupConfiguration;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getJoinConfigurations}
             * @param joinConfigurations the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder joinConfigurations(com.aliyun.ros.cdk.core.IResolvable joinConfigurations) {
                this.joinConfigurations = joinConfigurations;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getJoinConfigurations}
             * @param joinConfigurations the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder joinConfigurations(java.util.List<? extends java.lang.Object> joinConfigurations) {
                this.joinConfigurations = joinConfigurations;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getLabels}
             * @param labels the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder labels(com.aliyun.ros.cdk.core.IResolvable labels) {
                this.labels = labels;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getLabels}
             * @param labels the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder labels(java.util.List<? extends java.lang.Object> labels) {
                this.labels = labels;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getMuteUntil}
             * @param muteUntil the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder muteUntil(java.lang.Number muteUntil) {
                this.muteUntil = muteUntil;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getMuteUntil}
             * @param muteUntil the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder muteUntil(com.aliyun.ros.cdk.core.IResolvable muteUntil) {
                this.muteUntil = muteUntil;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getNoDataFire}
             * @param noDataFire the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder noDataFire(java.lang.Boolean noDataFire) {
                this.noDataFire = noDataFire;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getNoDataFire}
             * @param noDataFire the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder noDataFire(com.aliyun.ros.cdk.core.IResolvable noDataFire) {
                this.noDataFire = noDataFire;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getNoDataSeverity}
             * @param noDataSeverity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder noDataSeverity(java.lang.Number noDataSeverity) {
                this.noDataSeverity = noDataSeverity;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getNoDataSeverity}
             * @param noDataSeverity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder noDataSeverity(com.aliyun.ros.cdk.core.IResolvable noDataSeverity) {
                this.noDataSeverity = noDataSeverity;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getNotificationList}
             * @param notificationList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder notificationList(com.aliyun.ros.cdk.core.IResolvable notificationList) {
                this.notificationList = notificationList;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getNotificationList}
             * @param notificationList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder notificationList(java.util.List<? extends java.lang.Object> notificationList) {
                this.notificationList = notificationList;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getNotifyThreshold}
             * @param notifyThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder notifyThreshold(java.lang.Number notifyThreshold) {
                this.notifyThreshold = notifyThreshold;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getNotifyThreshold}
             * @param notifyThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder notifyThreshold(com.aliyun.ros.cdk.core.IResolvable notifyThreshold) {
                this.notifyThreshold = notifyThreshold;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getPolicyConfiguration}
             * @param policyConfiguration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder policyConfiguration(com.aliyun.ros.cdk.core.IResolvable policyConfiguration) {
                this.policyConfiguration = policyConfiguration;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getPolicyConfiguration}
             * @param policyConfiguration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder policyConfiguration(com.aliyun.ros.cdk.sls.RosAlert.PolicyConfigurationProperty policyConfiguration) {
                this.policyConfiguration = policyConfiguration;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getSendResolved}
             * @param sendResolved the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sendResolved(java.lang.Boolean sendResolved) {
                this.sendResolved = sendResolved;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getSendResolved}
             * @param sendResolved the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sendResolved(com.aliyun.ros.cdk.core.IResolvable sendResolved) {
                this.sendResolved = sendResolved;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getSeverityConfigurations}
             * @param severityConfigurations the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder severityConfigurations(com.aliyun.ros.cdk.core.IResolvable severityConfigurations) {
                this.severityConfigurations = severityConfigurations;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getSeverityConfigurations}
             * @param severityConfigurations the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder severityConfigurations(java.util.List<? extends java.lang.Object> severityConfigurations) {
                this.severityConfigurations = severityConfigurations;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getThreshold}
             * @param threshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder threshold(java.lang.Number threshold) {
                this.threshold = threshold;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getThreshold}
             * @param threshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder threshold(com.aliyun.ros.cdk.core.IResolvable threshold) {
                this.threshold = threshold;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getThrottling}
             * @param throttling the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder throttling(java.lang.String throttling) {
                this.throttling = throttling;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getThrottling}
             * @param throttling the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder throttling(com.aliyun.ros.cdk.core.IResolvable throttling) {
                this.throttling = throttling;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(java.lang.String version) {
                this.version = version;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(com.aliyun.ros.cdk.core.IResolvable version) {
                this.version = version;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ConfigurationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConfigurationProperty {
            private final java.lang.Object dashboard;
            private final java.lang.Object queryList;
            private final java.lang.Object annotations;
            private final java.lang.Object autoAnnotation;
            private final java.lang.Object condition;
            private final java.lang.Object groupConfiguration;
            private final java.lang.Object joinConfigurations;
            private final java.lang.Object labels;
            private final java.lang.Object muteUntil;
            private final java.lang.Object noDataFire;
            private final java.lang.Object noDataSeverity;
            private final java.lang.Object notificationList;
            private final java.lang.Object notifyThreshold;
            private final java.lang.Object policyConfiguration;
            private final java.lang.Object sendResolved;
            private final java.lang.Object severityConfigurations;
            private final java.lang.Object threshold;
            private final java.lang.Object throttling;
            private final java.lang.Object type;
            private final java.lang.Object version;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.dashboard = software.amazon.jsii.Kernel.get(this, "dashboard", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.queryList = software.amazon.jsii.Kernel.get(this, "queryList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.annotations = software.amazon.jsii.Kernel.get(this, "annotations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.autoAnnotation = software.amazon.jsii.Kernel.get(this, "autoAnnotation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.condition = software.amazon.jsii.Kernel.get(this, "condition", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.groupConfiguration = software.amazon.jsii.Kernel.get(this, "groupConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.joinConfigurations = software.amazon.jsii.Kernel.get(this, "joinConfigurations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.labels = software.amazon.jsii.Kernel.get(this, "labels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.muteUntil = software.amazon.jsii.Kernel.get(this, "muteUntil", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.noDataFire = software.amazon.jsii.Kernel.get(this, "noDataFire", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.noDataSeverity = software.amazon.jsii.Kernel.get(this, "noDataSeverity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.notificationList = software.amazon.jsii.Kernel.get(this, "notificationList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.notifyThreshold = software.amazon.jsii.Kernel.get(this, "notifyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.policyConfiguration = software.amazon.jsii.Kernel.get(this, "policyConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sendResolved = software.amazon.jsii.Kernel.get(this, "sendResolved", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.severityConfigurations = software.amazon.jsii.Kernel.get(this, "severityConfigurations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.threshold = software.amazon.jsii.Kernel.get(this, "threshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.throttling = software.amazon.jsii.Kernel.get(this, "throttling", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.dashboard = java.util.Objects.requireNonNull(builder.dashboard, "dashboard is required");
                this.queryList = java.util.Objects.requireNonNull(builder.queryList, "queryList is required");
                this.annotations = builder.annotations;
                this.autoAnnotation = builder.autoAnnotation;
                this.condition = builder.condition;
                this.groupConfiguration = builder.groupConfiguration;
                this.joinConfigurations = builder.joinConfigurations;
                this.labels = builder.labels;
                this.muteUntil = builder.muteUntil;
                this.noDataFire = builder.noDataFire;
                this.noDataSeverity = builder.noDataSeverity;
                this.notificationList = builder.notificationList;
                this.notifyThreshold = builder.notifyThreshold;
                this.policyConfiguration = builder.policyConfiguration;
                this.sendResolved = builder.sendResolved;
                this.severityConfigurations = builder.severityConfigurations;
                this.threshold = builder.threshold;
                this.throttling = builder.throttling;
                this.type = builder.type;
                this.version = builder.version;
            }

            @Override
            public final java.lang.Object getDashboard() {
                return this.dashboard;
            }

            @Override
            public final java.lang.Object getQueryList() {
                return this.queryList;
            }

            @Override
            public final java.lang.Object getAnnotations() {
                return this.annotations;
            }

            @Override
            public final java.lang.Object getAutoAnnotation() {
                return this.autoAnnotation;
            }

            @Override
            public final java.lang.Object getCondition() {
                return this.condition;
            }

            @Override
            public final java.lang.Object getGroupConfiguration() {
                return this.groupConfiguration;
            }

            @Override
            public final java.lang.Object getJoinConfigurations() {
                return this.joinConfigurations;
            }

            @Override
            public final java.lang.Object getLabels() {
                return this.labels;
            }

            @Override
            public final java.lang.Object getMuteUntil() {
                return this.muteUntil;
            }

            @Override
            public final java.lang.Object getNoDataFire() {
                return this.noDataFire;
            }

            @Override
            public final java.lang.Object getNoDataSeverity() {
                return this.noDataSeverity;
            }

            @Override
            public final java.lang.Object getNotificationList() {
                return this.notificationList;
            }

            @Override
            public final java.lang.Object getNotifyThreshold() {
                return this.notifyThreshold;
            }

            @Override
            public final java.lang.Object getPolicyConfiguration() {
                return this.policyConfiguration;
            }

            @Override
            public final java.lang.Object getSendResolved() {
                return this.sendResolved;
            }

            @Override
            public final java.lang.Object getSeverityConfigurations() {
                return this.severityConfigurations;
            }

            @Override
            public final java.lang.Object getThreshold() {
                return this.threshold;
            }

            @Override
            public final java.lang.Object getThrottling() {
                return this.throttling;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            public final java.lang.Object getVersion() {
                return this.version;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("dashboard", om.valueToTree(this.getDashboard()));
                data.set("queryList", om.valueToTree(this.getQueryList()));
                if (this.getAnnotations() != null) {
                    data.set("annotations", om.valueToTree(this.getAnnotations()));
                }
                if (this.getAutoAnnotation() != null) {
                    data.set("autoAnnotation", om.valueToTree(this.getAutoAnnotation()));
                }
                if (this.getCondition() != null) {
                    data.set("condition", om.valueToTree(this.getCondition()));
                }
                if (this.getGroupConfiguration() != null) {
                    data.set("groupConfiguration", om.valueToTree(this.getGroupConfiguration()));
                }
                if (this.getJoinConfigurations() != null) {
                    data.set("joinConfigurations", om.valueToTree(this.getJoinConfigurations()));
                }
                if (this.getLabels() != null) {
                    data.set("labels", om.valueToTree(this.getLabels()));
                }
                if (this.getMuteUntil() != null) {
                    data.set("muteUntil", om.valueToTree(this.getMuteUntil()));
                }
                if (this.getNoDataFire() != null) {
                    data.set("noDataFire", om.valueToTree(this.getNoDataFire()));
                }
                if (this.getNoDataSeverity() != null) {
                    data.set("noDataSeverity", om.valueToTree(this.getNoDataSeverity()));
                }
                if (this.getNotificationList() != null) {
                    data.set("notificationList", om.valueToTree(this.getNotificationList()));
                }
                if (this.getNotifyThreshold() != null) {
                    data.set("notifyThreshold", om.valueToTree(this.getNotifyThreshold()));
                }
                if (this.getPolicyConfiguration() != null) {
                    data.set("policyConfiguration", om.valueToTree(this.getPolicyConfiguration()));
                }
                if (this.getSendResolved() != null) {
                    data.set("sendResolved", om.valueToTree(this.getSendResolved()));
                }
                if (this.getSeverityConfigurations() != null) {
                    data.set("severityConfigurations", om.valueToTree(this.getSeverityConfigurations()));
                }
                if (this.getThreshold() != null) {
                    data.set("threshold", om.valueToTree(this.getThreshold()));
                }
                if (this.getThrottling() != null) {
                    data.set("throttling", om.valueToTree(this.getThrottling()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }
                if (this.getVersion() != null) {
                    data.set("version", om.valueToTree(this.getVersion()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosAlert.ConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ConfigurationProperty.Jsii$Proxy that = (ConfigurationProperty.Jsii$Proxy) o;

                if (!dashboard.equals(that.dashboard)) return false;
                if (!queryList.equals(that.queryList)) return false;
                if (this.annotations != null ? !this.annotations.equals(that.annotations) : that.annotations != null) return false;
                if (this.autoAnnotation != null ? !this.autoAnnotation.equals(that.autoAnnotation) : that.autoAnnotation != null) return false;
                if (this.condition != null ? !this.condition.equals(that.condition) : that.condition != null) return false;
                if (this.groupConfiguration != null ? !this.groupConfiguration.equals(that.groupConfiguration) : that.groupConfiguration != null) return false;
                if (this.joinConfigurations != null ? !this.joinConfigurations.equals(that.joinConfigurations) : that.joinConfigurations != null) return false;
                if (this.labels != null ? !this.labels.equals(that.labels) : that.labels != null) return false;
                if (this.muteUntil != null ? !this.muteUntil.equals(that.muteUntil) : that.muteUntil != null) return false;
                if (this.noDataFire != null ? !this.noDataFire.equals(that.noDataFire) : that.noDataFire != null) return false;
                if (this.noDataSeverity != null ? !this.noDataSeverity.equals(that.noDataSeverity) : that.noDataSeverity != null) return false;
                if (this.notificationList != null ? !this.notificationList.equals(that.notificationList) : that.notificationList != null) return false;
                if (this.notifyThreshold != null ? !this.notifyThreshold.equals(that.notifyThreshold) : that.notifyThreshold != null) return false;
                if (this.policyConfiguration != null ? !this.policyConfiguration.equals(that.policyConfiguration) : that.policyConfiguration != null) return false;
                if (this.sendResolved != null ? !this.sendResolved.equals(that.sendResolved) : that.sendResolved != null) return false;
                if (this.severityConfigurations != null ? !this.severityConfigurations.equals(that.severityConfigurations) : that.severityConfigurations != null) return false;
                if (this.threshold != null ? !this.threshold.equals(that.threshold) : that.threshold != null) return false;
                if (this.throttling != null ? !this.throttling.equals(that.throttling) : that.throttling != null) return false;
                if (this.type != null ? !this.type.equals(that.type) : that.type != null) return false;
                return this.version != null ? this.version.equals(that.version) : that.version == null;
            }

            @Override
            public final int hashCode() {
                int result = this.dashboard.hashCode();
                result = 31 * result + (this.queryList.hashCode());
                result = 31 * result + (this.annotations != null ? this.annotations.hashCode() : 0);
                result = 31 * result + (this.autoAnnotation != null ? this.autoAnnotation.hashCode() : 0);
                result = 31 * result + (this.condition != null ? this.condition.hashCode() : 0);
                result = 31 * result + (this.groupConfiguration != null ? this.groupConfiguration.hashCode() : 0);
                result = 31 * result + (this.joinConfigurations != null ? this.joinConfigurations.hashCode() : 0);
                result = 31 * result + (this.labels != null ? this.labels.hashCode() : 0);
                result = 31 * result + (this.muteUntil != null ? this.muteUntil.hashCode() : 0);
                result = 31 * result + (this.noDataFire != null ? this.noDataFire.hashCode() : 0);
                result = 31 * result + (this.noDataSeverity != null ? this.noDataSeverity.hashCode() : 0);
                result = 31 * result + (this.notificationList != null ? this.notificationList.hashCode() : 0);
                result = 31 * result + (this.notifyThreshold != null ? this.notifyThreshold.hashCode() : 0);
                result = 31 * result + (this.policyConfiguration != null ? this.policyConfiguration.hashCode() : 0);
                result = 31 * result + (this.sendResolved != null ? this.sendResolved.hashCode() : 0);
                result = 31 * result + (this.severityConfigurations != null ? this.severityConfigurations.hashCode() : 0);
                result = 31 * result + (this.threshold != null ? this.threshold.hashCode() : 0);
                result = 31 * result + (this.throttling != null ? this.throttling.hashCode() : 0);
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                result = 31 * result + (this.version != null ? this.version.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosAlert.DetailProperty")
    @software.amazon.jsii.Jsii.Proxy(DetailProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DetailProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getConfiguration();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDisplayName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSchedule();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getState() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DetailProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DetailProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DetailProperty> {
            java.lang.Object configuration;
            java.lang.Object displayName;
            java.lang.Object name;
            java.lang.Object schedule;
            java.lang.Object description;
            java.lang.Object state;
            java.lang.Object type;

            /**
             * Sets the value of {@link DetailProperty#getConfiguration}
             * @param configuration the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configuration(com.aliyun.ros.cdk.core.IResolvable configuration) {
                this.configuration = configuration;
                return this;
            }

            /**
             * Sets the value of {@link DetailProperty#getConfiguration}
             * @param configuration the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configuration(com.aliyun.ros.cdk.sls.RosAlert.ConfigurationProperty configuration) {
                this.configuration = configuration;
                return this;
            }

            /**
             * Sets the value of {@link DetailProperty#getDisplayName}
             * @param displayName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder displayName(java.lang.String displayName) {
                this.displayName = displayName;
                return this;
            }

            /**
             * Sets the value of {@link DetailProperty#getDisplayName}
             * @param displayName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder displayName(com.aliyun.ros.cdk.core.IResolvable displayName) {
                this.displayName = displayName;
                return this;
            }

            /**
             * Sets the value of {@link DetailProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link DetailProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link DetailProperty#getSchedule}
             * @param schedule the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder schedule(com.aliyun.ros.cdk.core.IResolvable schedule) {
                this.schedule = schedule;
                return this;
            }

            /**
             * Sets the value of {@link DetailProperty#getSchedule}
             * @param schedule the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder schedule(com.aliyun.ros.cdk.sls.RosAlert.ScheduleProperty schedule) {
                this.schedule = schedule;
                return this;
            }

            /**
             * Sets the value of {@link DetailProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(java.lang.String description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link DetailProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link DetailProperty#getState}
             * @param state the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder state(java.lang.String state) {
                this.state = state;
                return this;
            }

            /**
             * Sets the value of {@link DetailProperty#getState}
             * @param state the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder state(com.aliyun.ros.cdk.core.IResolvable state) {
                this.state = state;
                return this;
            }

            /**
             * Sets the value of {@link DetailProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link DetailProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DetailProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DetailProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DetailProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DetailProperty {
            private final java.lang.Object configuration;
            private final java.lang.Object displayName;
            private final java.lang.Object name;
            private final java.lang.Object schedule;
            private final java.lang.Object description;
            private final java.lang.Object state;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.configuration = software.amazon.jsii.Kernel.get(this, "configuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.displayName = software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.schedule = software.amazon.jsii.Kernel.get(this, "schedule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.state = software.amazon.jsii.Kernel.get(this, "state", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.configuration = java.util.Objects.requireNonNull(builder.configuration, "configuration is required");
                this.displayName = java.util.Objects.requireNonNull(builder.displayName, "displayName is required");
                this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
                this.schedule = java.util.Objects.requireNonNull(builder.schedule, "schedule is required");
                this.description = builder.description;
                this.state = builder.state;
                this.type = builder.type;
            }

            @Override
            public final java.lang.Object getConfiguration() {
                return this.configuration;
            }

            @Override
            public final java.lang.Object getDisplayName() {
                return this.displayName;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getSchedule() {
                return this.schedule;
            }

            @Override
            public final java.lang.Object getDescription() {
                return this.description;
            }

            @Override
            public final java.lang.Object getState() {
                return this.state;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("configuration", om.valueToTree(this.getConfiguration()));
                data.set("displayName", om.valueToTree(this.getDisplayName()));
                data.set("name", om.valueToTree(this.getName()));
                data.set("schedule", om.valueToTree(this.getSchedule()));
                if (this.getDescription() != null) {
                    data.set("description", om.valueToTree(this.getDescription()));
                }
                if (this.getState() != null) {
                    data.set("state", om.valueToTree(this.getState()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosAlert.DetailProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DetailProperty.Jsii$Proxy that = (DetailProperty.Jsii$Proxy) o;

                if (!configuration.equals(that.configuration)) return false;
                if (!displayName.equals(that.displayName)) return false;
                if (!name.equals(that.name)) return false;
                if (!schedule.equals(that.schedule)) return false;
                if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
                if (this.state != null ? !this.state.equals(that.state) : that.state != null) return false;
                return this.type != null ? this.type.equals(that.type) : that.type == null;
            }

            @Override
            public final int hashCode() {
                int result = this.configuration.hashCode();
                result = 31 * result + (this.displayName.hashCode());
                result = 31 * result + (this.name.hashCode());
                result = 31 * result + (this.schedule.hashCode());
                result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
                result = 31 * result + (this.state != null ? this.state.hashCode() : 0);
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosAlert.EvalConditionProperty")
    @software.amazon.jsii.Jsii.Proxy(EvalConditionProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface EvalConditionProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCondition() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCountCondition() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link EvalConditionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link EvalConditionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<EvalConditionProperty> {
            java.lang.Object condition;
            java.lang.Object countCondition;

            /**
             * Sets the value of {@link EvalConditionProperty#getCondition}
             * @param condition the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder condition(java.lang.String condition) {
                this.condition = condition;
                return this;
            }

            /**
             * Sets the value of {@link EvalConditionProperty#getCondition}
             * @param condition the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder condition(com.aliyun.ros.cdk.core.IResolvable condition) {
                this.condition = condition;
                return this;
            }

            /**
             * Sets the value of {@link EvalConditionProperty#getCountCondition}
             * @param countCondition the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder countCondition(java.lang.String countCondition) {
                this.countCondition = countCondition;
                return this;
            }

            /**
             * Sets the value of {@link EvalConditionProperty#getCountCondition}
             * @param countCondition the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder countCondition(com.aliyun.ros.cdk.core.IResolvable countCondition) {
                this.countCondition = countCondition;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link EvalConditionProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public EvalConditionProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link EvalConditionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EvalConditionProperty {
            private final java.lang.Object condition;
            private final java.lang.Object countCondition;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.condition = software.amazon.jsii.Kernel.get(this, "condition", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.countCondition = software.amazon.jsii.Kernel.get(this, "countCondition", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.condition = builder.condition;
                this.countCondition = builder.countCondition;
            }

            @Override
            public final java.lang.Object getCondition() {
                return this.condition;
            }

            @Override
            public final java.lang.Object getCountCondition() {
                return this.countCondition;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCondition() != null) {
                    data.set("condition", om.valueToTree(this.getCondition()));
                }
                if (this.getCountCondition() != null) {
                    data.set("countCondition", om.valueToTree(this.getCountCondition()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosAlert.EvalConditionProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                EvalConditionProperty.Jsii$Proxy that = (EvalConditionProperty.Jsii$Proxy) o;

                if (this.condition != null ? !this.condition.equals(that.condition) : that.condition != null) return false;
                return this.countCondition != null ? this.countCondition.equals(that.countCondition) : that.countCondition == null;
            }

            @Override
            public final int hashCode() {
                int result = this.condition != null ? this.condition.hashCode() : 0;
                result = 31 * result + (this.countCondition != null ? this.countCondition.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosAlert.GroupConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(GroupConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface GroupConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFields() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link GroupConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link GroupConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<GroupConfigurationProperty> {
            java.lang.Object type;
            java.lang.Object fields;

            /**
             * Sets the value of {@link GroupConfigurationProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link GroupConfigurationProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link GroupConfigurationProperty#getFields}
             * @param fields the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fields(com.aliyun.ros.cdk.core.IResolvable fields) {
                this.fields = fields;
                return this;
            }

            /**
             * Sets the value of {@link GroupConfigurationProperty#getFields}
             * @param fields the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fields(java.util.List<? extends java.lang.Object> fields) {
                this.fields = fields;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link GroupConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public GroupConfigurationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link GroupConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements GroupConfigurationProperty {
            private final java.lang.Object type;
            private final java.lang.Object fields;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fields = software.amazon.jsii.Kernel.get(this, "fields", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
                this.fields = builder.fields;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            public final java.lang.Object getFields() {
                return this.fields;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("type", om.valueToTree(this.getType()));
                if (this.getFields() != null) {
                    data.set("fields", om.valueToTree(this.getFields()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosAlert.GroupConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                GroupConfigurationProperty.Jsii$Proxy that = (GroupConfigurationProperty.Jsii$Proxy) o;

                if (!type.equals(that.type)) return false;
                return this.fields != null ? this.fields.equals(that.fields) : that.fields == null;
            }

            @Override
            public final int hashCode() {
                int result = this.type.hashCode();
                result = 31 * result + (this.fields != null ? this.fields.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosAlert.JoinConfigurationsProperty")
    @software.amazon.jsii.Jsii.Proxy(JoinConfigurationsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface JoinConfigurationsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCondition() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link JoinConfigurationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link JoinConfigurationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<JoinConfigurationsProperty> {
            java.lang.Object type;
            java.lang.Object condition;

            /**
             * Sets the value of {@link JoinConfigurationsProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link JoinConfigurationsProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link JoinConfigurationsProperty#getCondition}
             * @param condition the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder condition(java.lang.String condition) {
                this.condition = condition;
                return this;
            }

            /**
             * Sets the value of {@link JoinConfigurationsProperty#getCondition}
             * @param condition the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder condition(com.aliyun.ros.cdk.core.IResolvable condition) {
                this.condition = condition;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link JoinConfigurationsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public JoinConfigurationsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link JoinConfigurationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements JoinConfigurationsProperty {
            private final java.lang.Object type;
            private final java.lang.Object condition;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.condition = software.amazon.jsii.Kernel.get(this, "condition", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
                this.condition = builder.condition;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            public final java.lang.Object getCondition() {
                return this.condition;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("type", om.valueToTree(this.getType()));
                if (this.getCondition() != null) {
                    data.set("condition", om.valueToTree(this.getCondition()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosAlert.JoinConfigurationsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                JoinConfigurationsProperty.Jsii$Proxy that = (JoinConfigurationsProperty.Jsii$Proxy) o;

                if (!type.equals(that.type)) return false;
                return this.condition != null ? this.condition.equals(that.condition) : that.condition == null;
            }

            @Override
            public final int hashCode() {
                int result = this.type.hashCode();
                result = 31 * result + (this.condition != null ? this.condition.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosAlert.LabelsProperty")
    @software.amazon.jsii.Jsii.Proxy(LabelsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface LabelsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getValue();

        /**
         * @return a {@link Builder} of {@link LabelsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link LabelsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<LabelsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link LabelsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link LabelsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link LabelsProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link LabelsProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link LabelsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public LabelsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link LabelsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LabelsProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.value = java.util.Objects.requireNonNull(builder.value, "value is required");
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                data.set("value", om.valueToTree(this.getValue()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosAlert.LabelsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                LabelsProperty.Jsii$Proxy that = (LabelsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.value.equals(that.value);
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosAlert.NotificationListProperty")
    @software.amazon.jsii.Jsii.Proxy(NotificationListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface NotificationListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getContent() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEmailList() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHeaders() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMethod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMobileList() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceUri() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link NotificationListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link NotificationListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<NotificationListProperty> {
            java.lang.Object type;
            java.lang.Object content;
            java.lang.Object emailList;
            java.lang.Object headers;
            java.lang.Object method;
            java.lang.Object mobileList;
            java.lang.Object serviceUri;

            /**
             * Sets the value of {@link NotificationListProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link NotificationListProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link NotificationListProperty#getContent}
             * @param content the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder content(java.lang.String content) {
                this.content = content;
                return this;
            }

            /**
             * Sets the value of {@link NotificationListProperty#getContent}
             * @param content the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder content(com.aliyun.ros.cdk.core.IResolvable content) {
                this.content = content;
                return this;
            }

            /**
             * Sets the value of {@link NotificationListProperty#getEmailList}
             * @param emailList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder emailList(java.util.List<? extends java.lang.Object> emailList) {
                this.emailList = emailList;
                return this;
            }

            /**
             * Sets the value of {@link NotificationListProperty#getEmailList}
             * @param emailList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder emailList(com.aliyun.ros.cdk.core.IResolvable emailList) {
                this.emailList = emailList;
                return this;
            }

            /**
             * Sets the value of {@link NotificationListProperty#getHeaders}
             * @param headers the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder headers(com.aliyun.ros.cdk.core.IResolvable headers) {
                this.headers = headers;
                return this;
            }

            /**
             * Sets the value of {@link NotificationListProperty#getHeaders}
             * @param headers the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder headers(java.util.Map<java.lang.String, ? extends java.lang.Object> headers) {
                this.headers = headers;
                return this;
            }

            /**
             * Sets the value of {@link NotificationListProperty#getMethod}
             * @param method the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder method(java.lang.String method) {
                this.method = method;
                return this;
            }

            /**
             * Sets the value of {@link NotificationListProperty#getMethod}
             * @param method the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder method(com.aliyun.ros.cdk.core.IResolvable method) {
                this.method = method;
                return this;
            }

            /**
             * Sets the value of {@link NotificationListProperty#getMobileList}
             * @param mobileList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mobileList(java.util.List<? extends java.lang.Object> mobileList) {
                this.mobileList = mobileList;
                return this;
            }

            /**
             * Sets the value of {@link NotificationListProperty#getMobileList}
             * @param mobileList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mobileList(com.aliyun.ros.cdk.core.IResolvable mobileList) {
                this.mobileList = mobileList;
                return this;
            }

            /**
             * Sets the value of {@link NotificationListProperty#getServiceUri}
             * @param serviceUri the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceUri(java.lang.String serviceUri) {
                this.serviceUri = serviceUri;
                return this;
            }

            /**
             * Sets the value of {@link NotificationListProperty#getServiceUri}
             * @param serviceUri the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceUri(com.aliyun.ros.cdk.core.IResolvable serviceUri) {
                this.serviceUri = serviceUri;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link NotificationListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public NotificationListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link NotificationListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NotificationListProperty {
            private final java.lang.Object type;
            private final java.lang.Object content;
            private final java.lang.Object emailList;
            private final java.lang.Object headers;
            private final java.lang.Object method;
            private final java.lang.Object mobileList;
            private final java.lang.Object serviceUri;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.content = software.amazon.jsii.Kernel.get(this, "content", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.emailList = software.amazon.jsii.Kernel.get(this, "emailList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.headers = software.amazon.jsii.Kernel.get(this, "headers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.method = software.amazon.jsii.Kernel.get(this, "method", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mobileList = software.amazon.jsii.Kernel.get(this, "mobileList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceUri = software.amazon.jsii.Kernel.get(this, "serviceUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
                this.content = builder.content;
                this.emailList = builder.emailList;
                this.headers = builder.headers;
                this.method = builder.method;
                this.mobileList = builder.mobileList;
                this.serviceUri = builder.serviceUri;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            public final java.lang.Object getContent() {
                return this.content;
            }

            @Override
            public final java.lang.Object getEmailList() {
                return this.emailList;
            }

            @Override
            public final java.lang.Object getHeaders() {
                return this.headers;
            }

            @Override
            public final java.lang.Object getMethod() {
                return this.method;
            }

            @Override
            public final java.lang.Object getMobileList() {
                return this.mobileList;
            }

            @Override
            public final java.lang.Object getServiceUri() {
                return this.serviceUri;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("type", om.valueToTree(this.getType()));
                if (this.getContent() != null) {
                    data.set("content", om.valueToTree(this.getContent()));
                }
                if (this.getEmailList() != null) {
                    data.set("emailList", om.valueToTree(this.getEmailList()));
                }
                if (this.getHeaders() != null) {
                    data.set("headers", om.valueToTree(this.getHeaders()));
                }
                if (this.getMethod() != null) {
                    data.set("method", om.valueToTree(this.getMethod()));
                }
                if (this.getMobileList() != null) {
                    data.set("mobileList", om.valueToTree(this.getMobileList()));
                }
                if (this.getServiceUri() != null) {
                    data.set("serviceUri", om.valueToTree(this.getServiceUri()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosAlert.NotificationListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                NotificationListProperty.Jsii$Proxy that = (NotificationListProperty.Jsii$Proxy) o;

                if (!type.equals(that.type)) return false;
                if (this.content != null ? !this.content.equals(that.content) : that.content != null) return false;
                if (this.emailList != null ? !this.emailList.equals(that.emailList) : that.emailList != null) return false;
                if (this.headers != null ? !this.headers.equals(that.headers) : that.headers != null) return false;
                if (this.method != null ? !this.method.equals(that.method) : that.method != null) return false;
                if (this.mobileList != null ? !this.mobileList.equals(that.mobileList) : that.mobileList != null) return false;
                return this.serviceUri != null ? this.serviceUri.equals(that.serviceUri) : that.serviceUri == null;
            }

            @Override
            public final int hashCode() {
                int result = this.type.hashCode();
                result = 31 * result + (this.content != null ? this.content.hashCode() : 0);
                result = 31 * result + (this.emailList != null ? this.emailList.hashCode() : 0);
                result = 31 * result + (this.headers != null ? this.headers.hashCode() : 0);
                result = 31 * result + (this.method != null ? this.method.hashCode() : 0);
                result = 31 * result + (this.mobileList != null ? this.mobileList.hashCode() : 0);
                result = 31 * result + (this.serviceUri != null ? this.serviceUri.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosAlert.PolicyConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(PolicyConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PolicyConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getActionPolicyId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAlertPolicyId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRepeatInterval() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUseDefault() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PolicyConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PolicyConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PolicyConfigurationProperty> {
            java.lang.Object actionPolicyId;
            java.lang.Object alertPolicyId;
            java.lang.Object repeatInterval;
            java.lang.Object useDefault;

            /**
             * Sets the value of {@link PolicyConfigurationProperty#getActionPolicyId}
             * @param actionPolicyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder actionPolicyId(java.lang.String actionPolicyId) {
                this.actionPolicyId = actionPolicyId;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigurationProperty#getActionPolicyId}
             * @param actionPolicyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder actionPolicyId(com.aliyun.ros.cdk.core.IResolvable actionPolicyId) {
                this.actionPolicyId = actionPolicyId;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigurationProperty#getAlertPolicyId}
             * @param alertPolicyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder alertPolicyId(java.lang.String alertPolicyId) {
                this.alertPolicyId = alertPolicyId;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigurationProperty#getAlertPolicyId}
             * @param alertPolicyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder alertPolicyId(com.aliyun.ros.cdk.core.IResolvable alertPolicyId) {
                this.alertPolicyId = alertPolicyId;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigurationProperty#getRepeatInterval}
             * @param repeatInterval the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder repeatInterval(java.lang.String repeatInterval) {
                this.repeatInterval = repeatInterval;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigurationProperty#getRepeatInterval}
             * @param repeatInterval the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder repeatInterval(com.aliyun.ros.cdk.core.IResolvable repeatInterval) {
                this.repeatInterval = repeatInterval;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigurationProperty#getUseDefault}
             * @param useDefault the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder useDefault(java.lang.Boolean useDefault) {
                this.useDefault = useDefault;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigurationProperty#getUseDefault}
             * @param useDefault the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder useDefault(com.aliyun.ros.cdk.core.IResolvable useDefault) {
                this.useDefault = useDefault;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PolicyConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PolicyConfigurationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PolicyConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PolicyConfigurationProperty {
            private final java.lang.Object actionPolicyId;
            private final java.lang.Object alertPolicyId;
            private final java.lang.Object repeatInterval;
            private final java.lang.Object useDefault;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.actionPolicyId = software.amazon.jsii.Kernel.get(this, "actionPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.alertPolicyId = software.amazon.jsii.Kernel.get(this, "alertPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.repeatInterval = software.amazon.jsii.Kernel.get(this, "repeatInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.useDefault = software.amazon.jsii.Kernel.get(this, "useDefault", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.actionPolicyId = builder.actionPolicyId;
                this.alertPolicyId = builder.alertPolicyId;
                this.repeatInterval = builder.repeatInterval;
                this.useDefault = builder.useDefault;
            }

            @Override
            public final java.lang.Object getActionPolicyId() {
                return this.actionPolicyId;
            }

            @Override
            public final java.lang.Object getAlertPolicyId() {
                return this.alertPolicyId;
            }

            @Override
            public final java.lang.Object getRepeatInterval() {
                return this.repeatInterval;
            }

            @Override
            public final java.lang.Object getUseDefault() {
                return this.useDefault;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getActionPolicyId() != null) {
                    data.set("actionPolicyId", om.valueToTree(this.getActionPolicyId()));
                }
                if (this.getAlertPolicyId() != null) {
                    data.set("alertPolicyId", om.valueToTree(this.getAlertPolicyId()));
                }
                if (this.getRepeatInterval() != null) {
                    data.set("repeatInterval", om.valueToTree(this.getRepeatInterval()));
                }
                if (this.getUseDefault() != null) {
                    data.set("useDefault", om.valueToTree(this.getUseDefault()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosAlert.PolicyConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PolicyConfigurationProperty.Jsii$Proxy that = (PolicyConfigurationProperty.Jsii$Proxy) o;

                if (this.actionPolicyId != null ? !this.actionPolicyId.equals(that.actionPolicyId) : that.actionPolicyId != null) return false;
                if (this.alertPolicyId != null ? !this.alertPolicyId.equals(that.alertPolicyId) : that.alertPolicyId != null) return false;
                if (this.repeatInterval != null ? !this.repeatInterval.equals(that.repeatInterval) : that.repeatInterval != null) return false;
                return this.useDefault != null ? this.useDefault.equals(that.useDefault) : that.useDefault == null;
            }

            @Override
            public final int hashCode() {
                int result = this.actionPolicyId != null ? this.actionPolicyId.hashCode() : 0;
                result = 31 * result + (this.alertPolicyId != null ? this.alertPolicyId.hashCode() : 0);
                result = 31 * result + (this.repeatInterval != null ? this.repeatInterval.hashCode() : 0);
                result = 31 * result + (this.useDefault != null ? this.useDefault.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosAlert.QueryListProperty")
    @software.amazon.jsii.Jsii.Proxy(QueryListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface QueryListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEnd();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getQuery();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getStart();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTimeSpanType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getChartTitle() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDashboardId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLogStore() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPowerSqlMode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getProject() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRegion() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRoleArn() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStore() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStoreType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link QueryListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link QueryListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<QueryListProperty> {
            java.lang.Object end;
            java.lang.Object query;
            java.lang.Object start;
            java.lang.Object timeSpanType;
            java.lang.Object chartTitle;
            java.lang.Object dashboardId;
            java.lang.Object logStore;
            java.lang.Object powerSqlMode;
            java.lang.Object project;
            java.lang.Object region;
            java.lang.Object roleArn;
            java.lang.Object store;
            java.lang.Object storeType;

            /**
             * Sets the value of {@link QueryListProperty#getEnd}
             * @param end the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder end(java.lang.String end) {
                this.end = end;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getEnd}
             * @param end the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder end(com.aliyun.ros.cdk.core.IResolvable end) {
                this.end = end;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getQuery}
             * @param query the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder query(java.lang.String query) {
                this.query = query;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getQuery}
             * @param query the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder query(com.aliyun.ros.cdk.core.IResolvable query) {
                this.query = query;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getStart}
             * @param start the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder start(java.lang.String start) {
                this.start = start;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getStart}
             * @param start the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder start(com.aliyun.ros.cdk.core.IResolvable start) {
                this.start = start;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getTimeSpanType}
             * @param timeSpanType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeSpanType(java.lang.String timeSpanType) {
                this.timeSpanType = timeSpanType;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getTimeSpanType}
             * @param timeSpanType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeSpanType(com.aliyun.ros.cdk.core.IResolvable timeSpanType) {
                this.timeSpanType = timeSpanType;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getChartTitle}
             * @param chartTitle the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder chartTitle(java.lang.String chartTitle) {
                this.chartTitle = chartTitle;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getChartTitle}
             * @param chartTitle the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder chartTitle(com.aliyun.ros.cdk.core.IResolvable chartTitle) {
                this.chartTitle = chartTitle;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getDashboardId}
             * @param dashboardId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dashboardId(java.lang.String dashboardId) {
                this.dashboardId = dashboardId;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getDashboardId}
             * @param dashboardId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dashboardId(com.aliyun.ros.cdk.core.IResolvable dashboardId) {
                this.dashboardId = dashboardId;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getLogStore}
             * @param logStore the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logStore(java.lang.String logStore) {
                this.logStore = logStore;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getLogStore}
             * @param logStore the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logStore(com.aliyun.ros.cdk.core.IResolvable logStore) {
                this.logStore = logStore;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getPowerSqlMode}
             * @param powerSqlMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder powerSqlMode(java.lang.String powerSqlMode) {
                this.powerSqlMode = powerSqlMode;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getPowerSqlMode}
             * @param powerSqlMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder powerSqlMode(com.aliyun.ros.cdk.core.IResolvable powerSqlMode) {
                this.powerSqlMode = powerSqlMode;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getProject}
             * @param project the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder project(java.lang.String project) {
                this.project = project;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getProject}
             * @param project the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder project(com.aliyun.ros.cdk.core.IResolvable project) {
                this.project = project;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getRegion}
             * @param region the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder region(java.lang.String region) {
                this.region = region;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getRegion}
             * @param region the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder region(com.aliyun.ros.cdk.core.IResolvable region) {
                this.region = region;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getRoleArn}
             * @param roleArn the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder roleArn(java.lang.String roleArn) {
                this.roleArn = roleArn;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getRoleArn}
             * @param roleArn the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder roleArn(com.aliyun.ros.cdk.core.IResolvable roleArn) {
                this.roleArn = roleArn;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getStore}
             * @param store the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder store(java.lang.String store) {
                this.store = store;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getStore}
             * @param store the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder store(com.aliyun.ros.cdk.core.IResolvable store) {
                this.store = store;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getStoreType}
             * @param storeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storeType(java.lang.String storeType) {
                this.storeType = storeType;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getStoreType}
             * @param storeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storeType(com.aliyun.ros.cdk.core.IResolvable storeType) {
                this.storeType = storeType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link QueryListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public QueryListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link QueryListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements QueryListProperty {
            private final java.lang.Object end;
            private final java.lang.Object query;
            private final java.lang.Object start;
            private final java.lang.Object timeSpanType;
            private final java.lang.Object chartTitle;
            private final java.lang.Object dashboardId;
            private final java.lang.Object logStore;
            private final java.lang.Object powerSqlMode;
            private final java.lang.Object project;
            private final java.lang.Object region;
            private final java.lang.Object roleArn;
            private final java.lang.Object store;
            private final java.lang.Object storeType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.end = software.amazon.jsii.Kernel.get(this, "end", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.query = software.amazon.jsii.Kernel.get(this, "query", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.start = software.amazon.jsii.Kernel.get(this, "start", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timeSpanType = software.amazon.jsii.Kernel.get(this, "timeSpanType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.chartTitle = software.amazon.jsii.Kernel.get(this, "chartTitle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dashboardId = software.amazon.jsii.Kernel.get(this, "dashboardId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.logStore = software.amazon.jsii.Kernel.get(this, "logStore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.powerSqlMode = software.amazon.jsii.Kernel.get(this, "powerSqlMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.project = software.amazon.jsii.Kernel.get(this, "project", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.roleArn = software.amazon.jsii.Kernel.get(this, "roleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.store = software.amazon.jsii.Kernel.get(this, "store", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.storeType = software.amazon.jsii.Kernel.get(this, "storeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.end = java.util.Objects.requireNonNull(builder.end, "end is required");
                this.query = java.util.Objects.requireNonNull(builder.query, "query is required");
                this.start = java.util.Objects.requireNonNull(builder.start, "start is required");
                this.timeSpanType = java.util.Objects.requireNonNull(builder.timeSpanType, "timeSpanType is required");
                this.chartTitle = builder.chartTitle;
                this.dashboardId = builder.dashboardId;
                this.logStore = builder.logStore;
                this.powerSqlMode = builder.powerSqlMode;
                this.project = builder.project;
                this.region = builder.region;
                this.roleArn = builder.roleArn;
                this.store = builder.store;
                this.storeType = builder.storeType;
            }

            @Override
            public final java.lang.Object getEnd() {
                return this.end;
            }

            @Override
            public final java.lang.Object getQuery() {
                return this.query;
            }

            @Override
            public final java.lang.Object getStart() {
                return this.start;
            }

            @Override
            public final java.lang.Object getTimeSpanType() {
                return this.timeSpanType;
            }

            @Override
            public final java.lang.Object getChartTitle() {
                return this.chartTitle;
            }

            @Override
            public final java.lang.Object getDashboardId() {
                return this.dashboardId;
            }

            @Override
            public final java.lang.Object getLogStore() {
                return this.logStore;
            }

            @Override
            public final java.lang.Object getPowerSqlMode() {
                return this.powerSqlMode;
            }

            @Override
            public final java.lang.Object getProject() {
                return this.project;
            }

            @Override
            public final java.lang.Object getRegion() {
                return this.region;
            }

            @Override
            public final java.lang.Object getRoleArn() {
                return this.roleArn;
            }

            @Override
            public final java.lang.Object getStore() {
                return this.store;
            }

            @Override
            public final java.lang.Object getStoreType() {
                return this.storeType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("end", om.valueToTree(this.getEnd()));
                data.set("query", om.valueToTree(this.getQuery()));
                data.set("start", om.valueToTree(this.getStart()));
                data.set("timeSpanType", om.valueToTree(this.getTimeSpanType()));
                if (this.getChartTitle() != null) {
                    data.set("chartTitle", om.valueToTree(this.getChartTitle()));
                }
                if (this.getDashboardId() != null) {
                    data.set("dashboardId", om.valueToTree(this.getDashboardId()));
                }
                if (this.getLogStore() != null) {
                    data.set("logStore", om.valueToTree(this.getLogStore()));
                }
                if (this.getPowerSqlMode() != null) {
                    data.set("powerSqlMode", om.valueToTree(this.getPowerSqlMode()));
                }
                if (this.getProject() != null) {
                    data.set("project", om.valueToTree(this.getProject()));
                }
                if (this.getRegion() != null) {
                    data.set("region", om.valueToTree(this.getRegion()));
                }
                if (this.getRoleArn() != null) {
                    data.set("roleArn", om.valueToTree(this.getRoleArn()));
                }
                if (this.getStore() != null) {
                    data.set("store", om.valueToTree(this.getStore()));
                }
                if (this.getStoreType() != null) {
                    data.set("storeType", om.valueToTree(this.getStoreType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosAlert.QueryListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                QueryListProperty.Jsii$Proxy that = (QueryListProperty.Jsii$Proxy) o;

                if (!end.equals(that.end)) return false;
                if (!query.equals(that.query)) return false;
                if (!start.equals(that.start)) return false;
                if (!timeSpanType.equals(that.timeSpanType)) return false;
                if (this.chartTitle != null ? !this.chartTitle.equals(that.chartTitle) : that.chartTitle != null) return false;
                if (this.dashboardId != null ? !this.dashboardId.equals(that.dashboardId) : that.dashboardId != null) return false;
                if (this.logStore != null ? !this.logStore.equals(that.logStore) : that.logStore != null) return false;
                if (this.powerSqlMode != null ? !this.powerSqlMode.equals(that.powerSqlMode) : that.powerSqlMode != null) return false;
                if (this.project != null ? !this.project.equals(that.project) : that.project != null) return false;
                if (this.region != null ? !this.region.equals(that.region) : that.region != null) return false;
                if (this.roleArn != null ? !this.roleArn.equals(that.roleArn) : that.roleArn != null) return false;
                if (this.store != null ? !this.store.equals(that.store) : that.store != null) return false;
                return this.storeType != null ? this.storeType.equals(that.storeType) : that.storeType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.end.hashCode();
                result = 31 * result + (this.query.hashCode());
                result = 31 * result + (this.start.hashCode());
                result = 31 * result + (this.timeSpanType.hashCode());
                result = 31 * result + (this.chartTitle != null ? this.chartTitle.hashCode() : 0);
                result = 31 * result + (this.dashboardId != null ? this.dashboardId.hashCode() : 0);
                result = 31 * result + (this.logStore != null ? this.logStore.hashCode() : 0);
                result = 31 * result + (this.powerSqlMode != null ? this.powerSqlMode.hashCode() : 0);
                result = 31 * result + (this.project != null ? this.project.hashCode() : 0);
                result = 31 * result + (this.region != null ? this.region.hashCode() : 0);
                result = 31 * result + (this.roleArn != null ? this.roleArn.hashCode() : 0);
                result = 31 * result + (this.store != null ? this.store.hashCode() : 0);
                result = 31 * result + (this.storeType != null ? this.storeType.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosAlert.ScheduleProperty")
    @software.amazon.jsii.Jsii.Proxy(ScheduleProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ScheduleProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCronExpression() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDayOfWeek() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDelay() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHour() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInterval() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRunImmediately() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ScheduleProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ScheduleProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ScheduleProperty> {
            java.lang.Object type;
            java.lang.Object cronExpression;
            java.lang.Object dayOfWeek;
            java.lang.Object delay;
            java.lang.Object hour;
            java.lang.Object interval;
            java.lang.Object runImmediately;

            /**
             * Sets the value of {@link ScheduleProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link ScheduleProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link ScheduleProperty#getCronExpression}
             * @param cronExpression the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cronExpression(java.lang.String cronExpression) {
                this.cronExpression = cronExpression;
                return this;
            }

            /**
             * Sets the value of {@link ScheduleProperty#getCronExpression}
             * @param cronExpression the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cronExpression(com.aliyun.ros.cdk.core.IResolvable cronExpression) {
                this.cronExpression = cronExpression;
                return this;
            }

            /**
             * Sets the value of {@link ScheduleProperty#getDayOfWeek}
             * @param dayOfWeek the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dayOfWeek(java.lang.Number dayOfWeek) {
                this.dayOfWeek = dayOfWeek;
                return this;
            }

            /**
             * Sets the value of {@link ScheduleProperty#getDayOfWeek}
             * @param dayOfWeek the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dayOfWeek(com.aliyun.ros.cdk.core.IResolvable dayOfWeek) {
                this.dayOfWeek = dayOfWeek;
                return this;
            }

            /**
             * Sets the value of {@link ScheduleProperty#getDelay}
             * @param delay the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder delay(java.lang.Number delay) {
                this.delay = delay;
                return this;
            }

            /**
             * Sets the value of {@link ScheduleProperty#getDelay}
             * @param delay the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder delay(com.aliyun.ros.cdk.core.IResolvable delay) {
                this.delay = delay;
                return this;
            }

            /**
             * Sets the value of {@link ScheduleProperty#getHour}
             * @param hour the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hour(java.lang.Number hour) {
                this.hour = hour;
                return this;
            }

            /**
             * Sets the value of {@link ScheduleProperty#getHour}
             * @param hour the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hour(com.aliyun.ros.cdk.core.IResolvable hour) {
                this.hour = hour;
                return this;
            }

            /**
             * Sets the value of {@link ScheduleProperty#getInterval}
             * @param interval the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder interval(java.lang.String interval) {
                this.interval = interval;
                return this;
            }

            /**
             * Sets the value of {@link ScheduleProperty#getInterval}
             * @param interval the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder interval(com.aliyun.ros.cdk.core.IResolvable interval) {
                this.interval = interval;
                return this;
            }

            /**
             * Sets the value of {@link ScheduleProperty#getRunImmediately}
             * @param runImmediately the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder runImmediately(java.lang.Boolean runImmediately) {
                this.runImmediately = runImmediately;
                return this;
            }

            /**
             * Sets the value of {@link ScheduleProperty#getRunImmediately}
             * @param runImmediately the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder runImmediately(com.aliyun.ros.cdk.core.IResolvable runImmediately) {
                this.runImmediately = runImmediately;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ScheduleProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ScheduleProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ScheduleProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ScheduleProperty {
            private final java.lang.Object type;
            private final java.lang.Object cronExpression;
            private final java.lang.Object dayOfWeek;
            private final java.lang.Object delay;
            private final java.lang.Object hour;
            private final java.lang.Object interval;
            private final java.lang.Object runImmediately;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cronExpression = software.amazon.jsii.Kernel.get(this, "cronExpression", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dayOfWeek = software.amazon.jsii.Kernel.get(this, "dayOfWeek", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.delay = software.amazon.jsii.Kernel.get(this, "delay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.hour = software.amazon.jsii.Kernel.get(this, "hour", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.interval = software.amazon.jsii.Kernel.get(this, "interval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.runImmediately = software.amazon.jsii.Kernel.get(this, "runImmediately", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
                this.cronExpression = builder.cronExpression;
                this.dayOfWeek = builder.dayOfWeek;
                this.delay = builder.delay;
                this.hour = builder.hour;
                this.interval = builder.interval;
                this.runImmediately = builder.runImmediately;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            public final java.lang.Object getCronExpression() {
                return this.cronExpression;
            }

            @Override
            public final java.lang.Object getDayOfWeek() {
                return this.dayOfWeek;
            }

            @Override
            public final java.lang.Object getDelay() {
                return this.delay;
            }

            @Override
            public final java.lang.Object getHour() {
                return this.hour;
            }

            @Override
            public final java.lang.Object getInterval() {
                return this.interval;
            }

            @Override
            public final java.lang.Object getRunImmediately() {
                return this.runImmediately;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("type", om.valueToTree(this.getType()));
                if (this.getCronExpression() != null) {
                    data.set("cronExpression", om.valueToTree(this.getCronExpression()));
                }
                if (this.getDayOfWeek() != null) {
                    data.set("dayOfWeek", om.valueToTree(this.getDayOfWeek()));
                }
                if (this.getDelay() != null) {
                    data.set("delay", om.valueToTree(this.getDelay()));
                }
                if (this.getHour() != null) {
                    data.set("hour", om.valueToTree(this.getHour()));
                }
                if (this.getInterval() != null) {
                    data.set("interval", om.valueToTree(this.getInterval()));
                }
                if (this.getRunImmediately() != null) {
                    data.set("runImmediately", om.valueToTree(this.getRunImmediately()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosAlert.ScheduleProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ScheduleProperty.Jsii$Proxy that = (ScheduleProperty.Jsii$Proxy) o;

                if (!type.equals(that.type)) return false;
                if (this.cronExpression != null ? !this.cronExpression.equals(that.cronExpression) : that.cronExpression != null) return false;
                if (this.dayOfWeek != null ? !this.dayOfWeek.equals(that.dayOfWeek) : that.dayOfWeek != null) return false;
                if (this.delay != null ? !this.delay.equals(that.delay) : that.delay != null) return false;
                if (this.hour != null ? !this.hour.equals(that.hour) : that.hour != null) return false;
                if (this.interval != null ? !this.interval.equals(that.interval) : that.interval != null) return false;
                return this.runImmediately != null ? this.runImmediately.equals(that.runImmediately) : that.runImmediately == null;
            }

            @Override
            public final int hashCode() {
                int result = this.type.hashCode();
                result = 31 * result + (this.cronExpression != null ? this.cronExpression.hashCode() : 0);
                result = 31 * result + (this.dayOfWeek != null ? this.dayOfWeek.hashCode() : 0);
                result = 31 * result + (this.delay != null ? this.delay.hashCode() : 0);
                result = 31 * result + (this.hour != null ? this.hour.hashCode() : 0);
                result = 31 * result + (this.interval != null ? this.interval.hashCode() : 0);
                result = 31 * result + (this.runImmediately != null ? this.runImmediately.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosAlert.SeverityConfigurationsProperty")
    @software.amazon.jsii.Jsii.Proxy(SeverityConfigurationsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SeverityConfigurationsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSeverity();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEvalCondition() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SeverityConfigurationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SeverityConfigurationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SeverityConfigurationsProperty> {
            java.lang.Object severity;
            java.lang.Object evalCondition;

            /**
             * Sets the value of {@link SeverityConfigurationsProperty#getSeverity}
             * @param severity the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder severity(java.lang.Number severity) {
                this.severity = severity;
                return this;
            }

            /**
             * Sets the value of {@link SeverityConfigurationsProperty#getSeverity}
             * @param severity the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder severity(com.aliyun.ros.cdk.core.IResolvable severity) {
                this.severity = severity;
                return this;
            }

            /**
             * Sets the value of {@link SeverityConfigurationsProperty#getEvalCondition}
             * @param evalCondition the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder evalCondition(com.aliyun.ros.cdk.core.IResolvable evalCondition) {
                this.evalCondition = evalCondition;
                return this;
            }

            /**
             * Sets the value of {@link SeverityConfigurationsProperty#getEvalCondition}
             * @param evalCondition the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder evalCondition(com.aliyun.ros.cdk.sls.RosAlert.EvalConditionProperty evalCondition) {
                this.evalCondition = evalCondition;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SeverityConfigurationsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SeverityConfigurationsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SeverityConfigurationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SeverityConfigurationsProperty {
            private final java.lang.Object severity;
            private final java.lang.Object evalCondition;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.severity = software.amazon.jsii.Kernel.get(this, "severity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.evalCondition = software.amazon.jsii.Kernel.get(this, "evalCondition", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.severity = java.util.Objects.requireNonNull(builder.severity, "severity is required");
                this.evalCondition = builder.evalCondition;
            }

            @Override
            public final java.lang.Object getSeverity() {
                return this.severity;
            }

            @Override
            public final java.lang.Object getEvalCondition() {
                return this.evalCondition;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("severity", om.valueToTree(this.getSeverity()));
                if (this.getEvalCondition() != null) {
                    data.set("evalCondition", om.valueToTree(this.getEvalCondition()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosAlert.SeverityConfigurationsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SeverityConfigurationsProperty.Jsii$Proxy that = (SeverityConfigurationsProperty.Jsii$Proxy) o;

                if (!severity.equals(that.severity)) return false;
                return this.evalCondition != null ? this.evalCondition.equals(that.evalCondition) : that.evalCondition == null;
            }

            @Override
            public final int hashCode() {
                int result = this.severity.hashCode();
                result = 31 * result + (this.evalCondition != null ? this.evalCondition.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sls.RosAlert}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sls.RosAlert> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.sls.RosAlertProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sls.RosAlertProps.Builder();
        }

        /**
         * @return {@code this}
         * @param detail This parameter is required.
         */
        public Builder detail(final com.aliyun.ros.cdk.sls.RosAlert.DetailProperty detail) {
            this.props.detail(detail);
            return this;
        }
        /**
         * @return {@code this}
         * @param detail This parameter is required.
         */
        public Builder detail(final com.aliyun.ros.cdk.core.IResolvable detail) {
            this.props.detail(detail);
            return this;
        }

        /**
         * @return {@code this}
         * @param project This parameter is required.
         */
        public Builder project(final java.lang.String project) {
            this.props.project(project);
            return this;
        }
        /**
         * @return {@code this}
         * @param project This parameter is required.
         */
        public Builder project(final com.aliyun.ros.cdk.core.IResolvable project) {
            this.props.project(project);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.sls.RosAlert}.
         */
        @Override
        public com.aliyun.ros.cdk.sls.RosAlert build() {
            return new com.aliyun.ros.cdk.sls.RosAlert(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
