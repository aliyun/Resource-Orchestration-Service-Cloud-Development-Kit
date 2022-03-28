package com.aliyun.ros.cdk.sls;

/**
 * A ROS template type:  `ALIYUN::SLS::Alert`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:03.653Z")
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosAlert.ConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(ConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCondition();

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
        @org.jetbrains.annotations.NotNull java.lang.Object getThrottling();

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
            java.lang.Object condition;
            java.lang.Object dashboard;
            java.lang.Object queryList;
            java.lang.Object throttling;
            java.lang.Object notificationList;
            java.lang.Object notifyThreshold;

            /**
             * Sets the value of {@link ConfigurationProperty#getCondition}
             * @param condition the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder condition(java.lang.String condition) {
                this.condition = condition;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getCondition}
             * @param condition the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder condition(com.aliyun.ros.cdk.core.IResolvable condition) {
                this.condition = condition;
                return this;
            }

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
             * Sets the value of {@link ConfigurationProperty#getThrottling}
             * @param throttling the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder throttling(java.lang.String throttling) {
                this.throttling = throttling;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getThrottling}
             * @param throttling the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder throttling(com.aliyun.ros.cdk.core.IResolvable throttling) {
                this.throttling = throttling;
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
            private final java.lang.Object condition;
            private final java.lang.Object dashboard;
            private final java.lang.Object queryList;
            private final java.lang.Object throttling;
            private final java.lang.Object notificationList;
            private final java.lang.Object notifyThreshold;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.condition = software.amazon.jsii.Kernel.get(this, "condition", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dashboard = software.amazon.jsii.Kernel.get(this, "dashboard", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.queryList = software.amazon.jsii.Kernel.get(this, "queryList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.throttling = software.amazon.jsii.Kernel.get(this, "throttling", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.notificationList = software.amazon.jsii.Kernel.get(this, "notificationList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.notifyThreshold = software.amazon.jsii.Kernel.get(this, "notifyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.condition = java.util.Objects.requireNonNull(builder.condition, "condition is required");
                this.dashboard = java.util.Objects.requireNonNull(builder.dashboard, "dashboard is required");
                this.queryList = java.util.Objects.requireNonNull(builder.queryList, "queryList is required");
                this.throttling = java.util.Objects.requireNonNull(builder.throttling, "throttling is required");
                this.notificationList = builder.notificationList;
                this.notifyThreshold = builder.notifyThreshold;
            }

            @Override
            public final java.lang.Object getCondition() {
                return this.condition;
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
            public final java.lang.Object getThrottling() {
                return this.throttling;
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
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("condition", om.valueToTree(this.getCondition()));
                data.set("dashboard", om.valueToTree(this.getDashboard()));
                data.set("queryList", om.valueToTree(this.getQueryList()));
                data.set("throttling", om.valueToTree(this.getThrottling()));
                if (this.getNotificationList() != null) {
                    data.set("notificationList", om.valueToTree(this.getNotificationList()));
                }
                if (this.getNotifyThreshold() != null) {
                    data.set("notifyThreshold", om.valueToTree(this.getNotifyThreshold()));
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

                if (!condition.equals(that.condition)) return false;
                if (!dashboard.equals(that.dashboard)) return false;
                if (!queryList.equals(that.queryList)) return false;
                if (!throttling.equals(that.throttling)) return false;
                if (this.notificationList != null ? !this.notificationList.equals(that.notificationList) : that.notificationList != null) return false;
                return this.notifyThreshold != null ? this.notifyThreshold.equals(that.notifyThreshold) : that.notifyThreshold == null;
            }

            @Override
            public final int hashCode() {
                int result = this.condition.hashCode();
                result = 31 * result + (this.dashboard.hashCode());
                result = 31 * result + (this.queryList.hashCode());
                result = 31 * result + (this.throttling.hashCode());
                result = 31 * result + (this.notificationList != null ? this.notificationList.hashCode() : 0);
                result = 31 * result + (this.notifyThreshold != null ? this.notifyThreshold.hashCode() : 0);
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
                if (this.mobileList != null ? !this.mobileList.equals(that.mobileList) : that.mobileList != null) return false;
                return this.serviceUri != null ? this.serviceUri.equals(that.serviceUri) : that.serviceUri == null;
            }

            @Override
            public final int hashCode() {
                int result = this.type.hashCode();
                result = 31 * result + (this.content != null ? this.content.hashCode() : 0);
                result = 31 * result + (this.emailList != null ? this.emailList.hashCode() : 0);
                result = 31 * result + (this.mobileList != null ? this.mobileList.hashCode() : 0);
                result = 31 * result + (this.serviceUri != null ? this.serviceUri.hashCode() : 0);
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
        @org.jetbrains.annotations.NotNull java.lang.Object getChartTitle();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEnd();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getLogStore();

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
            java.lang.Object chartTitle;
            java.lang.Object end;
            java.lang.Object logStore;
            java.lang.Object query;
            java.lang.Object start;
            java.lang.Object timeSpanType;

            /**
             * Sets the value of {@link QueryListProperty#getChartTitle}
             * @param chartTitle the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder chartTitle(java.lang.String chartTitle) {
                this.chartTitle = chartTitle;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getChartTitle}
             * @param chartTitle the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder chartTitle(com.aliyun.ros.cdk.core.IResolvable chartTitle) {
                this.chartTitle = chartTitle;
                return this;
            }

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
             * Sets the value of {@link QueryListProperty#getLogStore}
             * @param logStore the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logStore(java.lang.String logStore) {
                this.logStore = logStore;
                return this;
            }

            /**
             * Sets the value of {@link QueryListProperty#getLogStore}
             * @param logStore the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logStore(com.aliyun.ros.cdk.core.IResolvable logStore) {
                this.logStore = logStore;
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
            private final java.lang.Object chartTitle;
            private final java.lang.Object end;
            private final java.lang.Object logStore;
            private final java.lang.Object query;
            private final java.lang.Object start;
            private final java.lang.Object timeSpanType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.chartTitle = software.amazon.jsii.Kernel.get(this, "chartTitle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.end = software.amazon.jsii.Kernel.get(this, "end", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.logStore = software.amazon.jsii.Kernel.get(this, "logStore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.query = software.amazon.jsii.Kernel.get(this, "query", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.start = software.amazon.jsii.Kernel.get(this, "start", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timeSpanType = software.amazon.jsii.Kernel.get(this, "timeSpanType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.chartTitle = java.util.Objects.requireNonNull(builder.chartTitle, "chartTitle is required");
                this.end = java.util.Objects.requireNonNull(builder.end, "end is required");
                this.logStore = java.util.Objects.requireNonNull(builder.logStore, "logStore is required");
                this.query = java.util.Objects.requireNonNull(builder.query, "query is required");
                this.start = java.util.Objects.requireNonNull(builder.start, "start is required");
                this.timeSpanType = java.util.Objects.requireNonNull(builder.timeSpanType, "timeSpanType is required");
            }

            @Override
            public final java.lang.Object getChartTitle() {
                return this.chartTitle;
            }

            @Override
            public final java.lang.Object getEnd() {
                return this.end;
            }

            @Override
            public final java.lang.Object getLogStore() {
                return this.logStore;
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
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("chartTitle", om.valueToTree(this.getChartTitle()));
                data.set("end", om.valueToTree(this.getEnd()));
                data.set("logStore", om.valueToTree(this.getLogStore()));
                data.set("query", om.valueToTree(this.getQuery()));
                data.set("start", om.valueToTree(this.getStart()));
                data.set("timeSpanType", om.valueToTree(this.getTimeSpanType()));

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

                if (!chartTitle.equals(that.chartTitle)) return false;
                if (!end.equals(that.end)) return false;
                if (!logStore.equals(that.logStore)) return false;
                if (!query.equals(that.query)) return false;
                if (!start.equals(that.start)) return false;
                return this.timeSpanType.equals(that.timeSpanType);
            }

            @Override
            public final int hashCode() {
                int result = this.chartTitle.hashCode();
                result = 31 * result + (this.end.hashCode());
                result = 31 * result + (this.logStore.hashCode());
                result = 31 * result + (this.query.hashCode());
                result = 31 * result + (this.start.hashCode());
                result = 31 * result + (this.timeSpanType.hashCode());
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
