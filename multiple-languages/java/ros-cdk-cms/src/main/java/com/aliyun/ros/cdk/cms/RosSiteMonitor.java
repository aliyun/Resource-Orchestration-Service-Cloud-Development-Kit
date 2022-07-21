package com.aliyun.ros.cdk.cms;

/**
 * A ROS template type:  `ALIYUN::CMS::SiteMonitor`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-21T02:24:24.171Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosSiteMonitor")
public class RosSiteMonitor extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSiteMonitor(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSiteMonitor(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cms.RosSiteMonitor.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::CMS::SiteMonitor`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSiteMonitor(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.RosSiteMonitorProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrTaskId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAddress() {
        return software.amazon.jsii.Kernel.get(this, "address", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAddress(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "address", java.util.Objects.requireNonNull(value, "address is required"));
    }

    /**
     */
    public void setAddress(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "address", java.util.Objects.requireNonNull(value, "address is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTaskName() {
        return software.amazon.jsii.Kernel.get(this, "taskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTaskName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "taskName", java.util.Objects.requireNonNull(value, "taskName is required"));
    }

    /**
     */
    public void setTaskName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "taskName", java.util.Objects.requireNonNull(value, "taskName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTaskType() {
        return software.amazon.jsii.Kernel.get(this, "taskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTaskType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "taskType", java.util.Objects.requireNonNull(value, "taskType is required"));
    }

    /**
     */
    public void setTaskType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "taskType", java.util.Objects.requireNonNull(value, "taskType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAlertIds() {
        return software.amazon.jsii.Kernel.get(this, "alertIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAlertIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "alertIds", value);
    }

    /**
     */
    public void setAlertIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "alertIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInterval() {
        return software.amazon.jsii.Kernel.get(this, "interval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInterval(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "interval", value);
    }

    /**
     */
    public void setInterval(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "interval", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIspCities() {
        return software.amazon.jsii.Kernel.get(this, "ispCities", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIspCities(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ispCities", value);
    }

    /**
     */
    public void setIspCities(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "ispCities", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOptionsJson() {
        return software.amazon.jsii.Kernel.get(this, "optionsJson", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOptionsJson(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "optionsJson", value);
    }

    /**
     */
    public void setOptionsJson(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "optionsJson", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosSiteMonitor.IspCitiesProperty")
    @software.amazon.jsii.Jsii.Proxy(IspCitiesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface IspCitiesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCity();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getIsp();

        /**
         * @return a {@link Builder} of {@link IspCitiesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link IspCitiesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<IspCitiesProperty> {
            java.lang.Object city;
            java.lang.Object isp;

            /**
             * Sets the value of {@link IspCitiesProperty#getCity}
             * @param city the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder city(java.lang.String city) {
                this.city = city;
                return this;
            }

            /**
             * Sets the value of {@link IspCitiesProperty#getCity}
             * @param city the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder city(com.aliyun.ros.cdk.core.IResolvable city) {
                this.city = city;
                return this;
            }

            /**
             * Sets the value of {@link IspCitiesProperty#getIsp}
             * @param isp the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isp(java.lang.String isp) {
                this.isp = isp;
                return this;
            }

            /**
             * Sets the value of {@link IspCitiesProperty#getIsp}
             * @param isp the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isp(com.aliyun.ros.cdk.core.IResolvable isp) {
                this.isp = isp;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link IspCitiesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public IspCitiesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link IspCitiesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IspCitiesProperty {
            private final java.lang.Object city;
            private final java.lang.Object isp;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.city = software.amazon.jsii.Kernel.get(this, "city", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.isp = software.amazon.jsii.Kernel.get(this, "isp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.city = java.util.Objects.requireNonNull(builder.city, "city is required");
                this.isp = java.util.Objects.requireNonNull(builder.isp, "isp is required");
            }

            @Override
            public final java.lang.Object getCity() {
                return this.city;
            }

            @Override
            public final java.lang.Object getIsp() {
                return this.isp;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("city", om.valueToTree(this.getCity()));
                data.set("isp", om.valueToTree(this.getIsp()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosSiteMonitor.IspCitiesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                IspCitiesProperty.Jsii$Proxy that = (IspCitiesProperty.Jsii$Proxy) o;

                if (!city.equals(that.city)) return false;
                return this.isp.equals(that.isp);
            }

            @Override
            public final int hashCode() {
                int result = this.city.hashCode();
                result = 31 * result + (this.isp.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.RosSiteMonitor}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.RosSiteMonitor> {
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
        private final com.aliyun.ros.cdk.cms.RosSiteMonitorProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms.RosSiteMonitorProps.Builder();
        }

        /**
         * @return {@code this}
         * @param address This parameter is required.
         */
        public Builder address(final java.lang.String address) {
            this.props.address(address);
            return this;
        }
        /**
         * @return {@code this}
         * @param address This parameter is required.
         */
        public Builder address(final com.aliyun.ros.cdk.core.IResolvable address) {
            this.props.address(address);
            return this;
        }

        /**
         * @return {@code this}
         * @param taskName This parameter is required.
         */
        public Builder taskName(final java.lang.String taskName) {
            this.props.taskName(taskName);
            return this;
        }
        /**
         * @return {@code this}
         * @param taskName This parameter is required.
         */
        public Builder taskName(final com.aliyun.ros.cdk.core.IResolvable taskName) {
            this.props.taskName(taskName);
            return this;
        }

        /**
         * @return {@code this}
         * @param taskType This parameter is required.
         */
        public Builder taskType(final java.lang.String taskType) {
            this.props.taskType(taskType);
            return this;
        }
        /**
         * @return {@code this}
         * @param taskType This parameter is required.
         */
        public Builder taskType(final com.aliyun.ros.cdk.core.IResolvable taskType) {
            this.props.taskType(taskType);
            return this;
        }

        /**
         * @return {@code this}
         * @param alertIds This parameter is required.
         */
        public Builder alertIds(final com.aliyun.ros.cdk.core.IResolvable alertIds) {
            this.props.alertIds(alertIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param alertIds This parameter is required.
         */
        public Builder alertIds(final java.util.List<? extends java.lang.Object> alertIds) {
            this.props.alertIds(alertIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param interval This parameter is required.
         */
        public Builder interval(final java.lang.Number interval) {
            this.props.interval(interval);
            return this;
        }
        /**
         * @return {@code this}
         * @param interval This parameter is required.
         */
        public Builder interval(final com.aliyun.ros.cdk.core.IResolvable interval) {
            this.props.interval(interval);
            return this;
        }

        /**
         * @return {@code this}
         * @param ispCities This parameter is required.
         */
        public Builder ispCities(final com.aliyun.ros.cdk.core.IResolvable ispCities) {
            this.props.ispCities(ispCities);
            return this;
        }
        /**
         * @return {@code this}
         * @param ispCities This parameter is required.
         */
        public Builder ispCities(final java.util.List<? extends java.lang.Object> ispCities) {
            this.props.ispCities(ispCities);
            return this;
        }

        /**
         * @return {@code this}
         * @param optionsJson This parameter is required.
         */
        public Builder optionsJson(final java.lang.String optionsJson) {
            this.props.optionsJson(optionsJson);
            return this;
        }
        /**
         * @return {@code this}
         * @param optionsJson This parameter is required.
         */
        public Builder optionsJson(final com.aliyun.ros.cdk.core.IResolvable optionsJson) {
            this.props.optionsJson(optionsJson);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cms.RosSiteMonitor}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.RosSiteMonitor build() {
            return new com.aliyun.ros.cdk.cms.RosSiteMonitor(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
