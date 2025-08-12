package com.aliyun.ros.cdk.sls;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::SLS::EtlV2</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:50.926Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosEtlV2")
public class RosEtlV2 extends com.aliyun.ros.cdk.core.RosResource {

    protected RosEtlV2(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosEtlV2(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.sls.RosEtlV2.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosEtlV2(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.RosEtlV2Props props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "configuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConfiguration(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "configuration", java.util.Objects.requireNonNull(value, "configuration is required"));
    }

    /**
     */
    public void setConfiguration(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.RosEtlV2.ConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "configuration", java.util.Objects.requireNonNull(value, "configuration is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDisplayName() {
        return software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDisplayName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "displayName", java.util.Objects.requireNonNull(value, "displayName is required"));
    }

    /**
     */
    public void setDisplayName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "displayName", java.util.Objects.requireNonNull(value, "displayName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosEtlV2.ConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(ConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getLogstore();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRoleArn();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getScript();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSinks();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFromTime() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLang() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getParameters() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getToTime() {
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
            java.lang.Object logstore;
            java.lang.Object roleArn;
            java.lang.Object script;
            java.lang.Object sinks;
            java.lang.Object fromTime;
            java.lang.Object lang;
            java.lang.Object parameters;
            java.lang.Object toTime;

            /**
             * Sets the value of {@link ConfigurationProperty#getLogstore}
             * @param logstore the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logstore(java.lang.String logstore) {
                this.logstore = logstore;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getLogstore}
             * @param logstore the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logstore(com.aliyun.ros.cdk.core.IResolvable logstore) {
                this.logstore = logstore;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getRoleArn}
             * @param roleArn the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder roleArn(java.lang.String roleArn) {
                this.roleArn = roleArn;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getRoleArn}
             * @param roleArn the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder roleArn(com.aliyun.ros.cdk.core.IResolvable roleArn) {
                this.roleArn = roleArn;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getScript}
             * @param script the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder script(java.lang.String script) {
                this.script = script;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getScript}
             * @param script the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder script(com.aliyun.ros.cdk.core.IResolvable script) {
                this.script = script;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getSinks}
             * @param sinks the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sinks(com.aliyun.ros.cdk.core.IResolvable sinks) {
                this.sinks = sinks;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getSinks}
             * @param sinks the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sinks(java.util.List<? extends java.lang.Object> sinks) {
                this.sinks = sinks;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getFromTime}
             * @param fromTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fromTime(java.lang.Number fromTime) {
                this.fromTime = fromTime;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getFromTime}
             * @param fromTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fromTime(com.aliyun.ros.cdk.core.IResolvable fromTime) {
                this.fromTime = fromTime;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getLang}
             * @param lang the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder lang(java.lang.String lang) {
                this.lang = lang;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getLang}
             * @param lang the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder lang(com.aliyun.ros.cdk.core.IResolvable lang) {
                this.lang = lang;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getParameters}
             * @param parameters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder parameters(com.aliyun.ros.cdk.core.IResolvable parameters) {
                this.parameters = parameters;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getParameters}
             * @param parameters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder parameters(java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
                this.parameters = parameters;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getToTime}
             * @param toTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder toTime(java.lang.Number toTime) {
                this.toTime = toTime;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getToTime}
             * @param toTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder toTime(com.aliyun.ros.cdk.core.IResolvable toTime) {
                this.toTime = toTime;
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
            private final java.lang.Object logstore;
            private final java.lang.Object roleArn;
            private final java.lang.Object script;
            private final java.lang.Object sinks;
            private final java.lang.Object fromTime;
            private final java.lang.Object lang;
            private final java.lang.Object parameters;
            private final java.lang.Object toTime;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.logstore = software.amazon.jsii.Kernel.get(this, "logstore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.roleArn = software.amazon.jsii.Kernel.get(this, "roleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.script = software.amazon.jsii.Kernel.get(this, "script", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sinks = software.amazon.jsii.Kernel.get(this, "sinks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fromTime = software.amazon.jsii.Kernel.get(this, "fromTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.lang = software.amazon.jsii.Kernel.get(this, "lang", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.toTime = software.amazon.jsii.Kernel.get(this, "toTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.logstore = java.util.Objects.requireNonNull(builder.logstore, "logstore is required");
                this.roleArn = java.util.Objects.requireNonNull(builder.roleArn, "roleArn is required");
                this.script = java.util.Objects.requireNonNull(builder.script, "script is required");
                this.sinks = java.util.Objects.requireNonNull(builder.sinks, "sinks is required");
                this.fromTime = builder.fromTime;
                this.lang = builder.lang;
                this.parameters = builder.parameters;
                this.toTime = builder.toTime;
            }

            @Override
            public final java.lang.Object getLogstore() {
                return this.logstore;
            }

            @Override
            public final java.lang.Object getRoleArn() {
                return this.roleArn;
            }

            @Override
            public final java.lang.Object getScript() {
                return this.script;
            }

            @Override
            public final java.lang.Object getSinks() {
                return this.sinks;
            }

            @Override
            public final java.lang.Object getFromTime() {
                return this.fromTime;
            }

            @Override
            public final java.lang.Object getLang() {
                return this.lang;
            }

            @Override
            public final java.lang.Object getParameters() {
                return this.parameters;
            }

            @Override
            public final java.lang.Object getToTime() {
                return this.toTime;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("logstore", om.valueToTree(this.getLogstore()));
                data.set("roleArn", om.valueToTree(this.getRoleArn()));
                data.set("script", om.valueToTree(this.getScript()));
                data.set("sinks", om.valueToTree(this.getSinks()));
                if (this.getFromTime() != null) {
                    data.set("fromTime", om.valueToTree(this.getFromTime()));
                }
                if (this.getLang() != null) {
                    data.set("lang", om.valueToTree(this.getLang()));
                }
                if (this.getParameters() != null) {
                    data.set("parameters", om.valueToTree(this.getParameters()));
                }
                if (this.getToTime() != null) {
                    data.set("toTime", om.valueToTree(this.getToTime()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosEtlV2.ConfigurationProperty"));
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

                if (!logstore.equals(that.logstore)) return false;
                if (!roleArn.equals(that.roleArn)) return false;
                if (!script.equals(that.script)) return false;
                if (!sinks.equals(that.sinks)) return false;
                if (this.fromTime != null ? !this.fromTime.equals(that.fromTime) : that.fromTime != null) return false;
                if (this.lang != null ? !this.lang.equals(that.lang) : that.lang != null) return false;
                if (this.parameters != null ? !this.parameters.equals(that.parameters) : that.parameters != null) return false;
                return this.toTime != null ? this.toTime.equals(that.toTime) : that.toTime == null;
            }

            @Override
            public final int hashCode() {
                int result = this.logstore.hashCode();
                result = 31 * result + (this.roleArn.hashCode());
                result = 31 * result + (this.script.hashCode());
                result = 31 * result + (this.sinks.hashCode());
                result = 31 * result + (this.fromTime != null ? this.fromTime.hashCode() : 0);
                result = 31 * result + (this.lang != null ? this.lang.hashCode() : 0);
                result = 31 * result + (this.parameters != null ? this.parameters.hashCode() : 0);
                result = 31 * result + (this.toTime != null ? this.toTime.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosEtlV2.SinksProperty")
    @software.amazon.jsii.Jsii.Proxy(SinksProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SinksProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getLogstore();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getProject();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRoleArn();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDatasets() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEndpoint() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SinksProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SinksProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SinksProperty> {
            java.lang.Object logstore;
            java.lang.Object name;
            java.lang.Object project;
            java.lang.Object roleArn;
            java.lang.Object datasets;
            java.lang.Object endpoint;

            /**
             * Sets the value of {@link SinksProperty#getLogstore}
             * @param logstore the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logstore(java.lang.String logstore) {
                this.logstore = logstore;
                return this;
            }

            /**
             * Sets the value of {@link SinksProperty#getLogstore}
             * @param logstore the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logstore(com.aliyun.ros.cdk.core.IResolvable logstore) {
                this.logstore = logstore;
                return this;
            }

            /**
             * Sets the value of {@link SinksProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link SinksProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link SinksProperty#getProject}
             * @param project the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder project(java.lang.String project) {
                this.project = project;
                return this;
            }

            /**
             * Sets the value of {@link SinksProperty#getProject}
             * @param project the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder project(com.aliyun.ros.cdk.core.IResolvable project) {
                this.project = project;
                return this;
            }

            /**
             * Sets the value of {@link SinksProperty#getRoleArn}
             * @param roleArn the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder roleArn(java.lang.String roleArn) {
                this.roleArn = roleArn;
                return this;
            }

            /**
             * Sets the value of {@link SinksProperty#getRoleArn}
             * @param roleArn the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder roleArn(com.aliyun.ros.cdk.core.IResolvable roleArn) {
                this.roleArn = roleArn;
                return this;
            }

            /**
             * Sets the value of {@link SinksProperty#getDatasets}
             * @param datasets the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder datasets(com.aliyun.ros.cdk.core.IResolvable datasets) {
                this.datasets = datasets;
                return this;
            }

            /**
             * Sets the value of {@link SinksProperty#getDatasets}
             * @param datasets the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder datasets(java.util.List<? extends java.lang.Object> datasets) {
                this.datasets = datasets;
                return this;
            }

            /**
             * Sets the value of {@link SinksProperty#getEndpoint}
             * @param endpoint the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpoint(java.lang.String endpoint) {
                this.endpoint = endpoint;
                return this;
            }

            /**
             * Sets the value of {@link SinksProperty#getEndpoint}
             * @param endpoint the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpoint(com.aliyun.ros.cdk.core.IResolvable endpoint) {
                this.endpoint = endpoint;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SinksProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SinksProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SinksProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SinksProperty {
            private final java.lang.Object logstore;
            private final java.lang.Object name;
            private final java.lang.Object project;
            private final java.lang.Object roleArn;
            private final java.lang.Object datasets;
            private final java.lang.Object endpoint;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.logstore = software.amazon.jsii.Kernel.get(this, "logstore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.project = software.amazon.jsii.Kernel.get(this, "project", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.roleArn = software.amazon.jsii.Kernel.get(this, "roleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.datasets = software.amazon.jsii.Kernel.get(this, "datasets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.endpoint = software.amazon.jsii.Kernel.get(this, "endpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.logstore = java.util.Objects.requireNonNull(builder.logstore, "logstore is required");
                this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
                this.project = java.util.Objects.requireNonNull(builder.project, "project is required");
                this.roleArn = java.util.Objects.requireNonNull(builder.roleArn, "roleArn is required");
                this.datasets = builder.datasets;
                this.endpoint = builder.endpoint;
            }

            @Override
            public final java.lang.Object getLogstore() {
                return this.logstore;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getProject() {
                return this.project;
            }

            @Override
            public final java.lang.Object getRoleArn() {
                return this.roleArn;
            }

            @Override
            public final java.lang.Object getDatasets() {
                return this.datasets;
            }

            @Override
            public final java.lang.Object getEndpoint() {
                return this.endpoint;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("logstore", om.valueToTree(this.getLogstore()));
                data.set("name", om.valueToTree(this.getName()));
                data.set("project", om.valueToTree(this.getProject()));
                data.set("roleArn", om.valueToTree(this.getRoleArn()));
                if (this.getDatasets() != null) {
                    data.set("datasets", om.valueToTree(this.getDatasets()));
                }
                if (this.getEndpoint() != null) {
                    data.set("endpoint", om.valueToTree(this.getEndpoint()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosEtlV2.SinksProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SinksProperty.Jsii$Proxy that = (SinksProperty.Jsii$Proxy) o;

                if (!logstore.equals(that.logstore)) return false;
                if (!name.equals(that.name)) return false;
                if (!project.equals(that.project)) return false;
                if (!roleArn.equals(that.roleArn)) return false;
                if (this.datasets != null ? !this.datasets.equals(that.datasets) : that.datasets != null) return false;
                return this.endpoint != null ? this.endpoint.equals(that.endpoint) : that.endpoint == null;
            }

            @Override
            public final int hashCode() {
                int result = this.logstore.hashCode();
                result = 31 * result + (this.name.hashCode());
                result = 31 * result + (this.project.hashCode());
                result = 31 * result + (this.roleArn.hashCode());
                result = 31 * result + (this.datasets != null ? this.datasets.hashCode() : 0);
                result = 31 * result + (this.endpoint != null ? this.endpoint.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sls.RosEtlV2}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sls.RosEtlV2> {
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
        private final com.aliyun.ros.cdk.sls.RosEtlV2Props.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sls.RosEtlV2Props.Builder();
        }

        /**
         * @return {@code this}
         * @param configuration This parameter is required.
         */
        public Builder configuration(final com.aliyun.ros.cdk.core.IResolvable configuration) {
            this.props.configuration(configuration);
            return this;
        }
        /**
         * @return {@code this}
         * @param configuration This parameter is required.
         */
        public Builder configuration(final com.aliyun.ros.cdk.sls.RosEtlV2.ConfigurationProperty configuration) {
            this.props.configuration(configuration);
            return this;
        }

        /**
         * @return {@code this}
         * @param displayName This parameter is required.
         */
        public Builder displayName(final java.lang.String displayName) {
            this.props.displayName(displayName);
            return this;
        }
        /**
         * @return {@code this}
         * @param displayName This parameter is required.
         */
        public Builder displayName(final com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.props.displayName(displayName);
            return this;
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sls.RosEtlV2}.
         */
        @Override
        public com.aliyun.ros.cdk.sls.RosEtlV2 build() {
            return new com.aliyun.ros.cdk.sls.RosEtlV2(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
