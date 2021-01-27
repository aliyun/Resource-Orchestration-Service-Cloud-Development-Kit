package com.aliyun.ros.cdk.sls;

/**
 * A ROS template type:  `ALIYUN::SLS::Index`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.602Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosIndex")
public class RosIndex extends com.aliyun.ros.cdk.core.RosResource {

    protected RosIndex(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosIndex(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.sls.RosIndex.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::SLS::Index`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosIndex(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.RosIndexProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     * A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    /**
     * A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.
     */
    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getFullTextIndex() {
        return software.amazon.jsii.Kernel.get(this, "fullTextIndex", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFullTextIndex(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "fullTextIndex", java.util.Objects.requireNonNull(value, "fullTextIndex is required"));
    }

    /**
     */
    public void setFullTextIndex(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.RosIndex.FullTextIndexProperty value) {
        software.amazon.jsii.Kernel.set(this, "fullTextIndex", java.util.Objects.requireNonNull(value, "fullTextIndex is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getLogstoreName() {
        return software.amazon.jsii.Kernel.get(this, "logstoreName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setLogstoreName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "logstoreName", java.util.Objects.requireNonNull(value, "logstoreName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getProjectName() {
        return software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setProjectName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "projectName", java.util.Objects.requireNonNull(value, "projectName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getKeyIndices() {
        return software.amazon.jsii.Kernel.get(this, "keyIndices", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setKeyIndices(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "keyIndices", value);
    }

    /**
     */
    public void setKeyIndices(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "keyIndices", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLogReduce() {
        return software.amazon.jsii.Kernel.get(this, "logReduce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogReduce(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "logReduce", value);
    }

    /**
     */
    public void setLogReduce(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logReduce", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosIndex.FullTextIndexProperty")
    @software.amazon.jsii.Jsii.Proxy(FullTextIndexProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface FullTextIndexProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEnable();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCaseSensitive() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getDelimiter() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIncludeChinese() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link FullTextIndexProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link FullTextIndexProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<FullTextIndexProperty> {
            private java.lang.Object enable;
            private java.lang.Object caseSensitive;
            private java.lang.String delimiter;
            private java.lang.Object includeChinese;

            /**
             * Sets the value of {@link FullTextIndexProperty#getEnable}
             * @param enable the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(java.lang.Boolean enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link FullTextIndexProperty#getEnable}
             * @param enable the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link FullTextIndexProperty#getCaseSensitive}
             * @param caseSensitive the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder caseSensitive(java.lang.Boolean caseSensitive) {
                this.caseSensitive = caseSensitive;
                return this;
            }

            /**
             * Sets the value of {@link FullTextIndexProperty#getCaseSensitive}
             * @param caseSensitive the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder caseSensitive(com.aliyun.ros.cdk.core.IResolvable caseSensitive) {
                this.caseSensitive = caseSensitive;
                return this;
            }

            /**
             * Sets the value of {@link FullTextIndexProperty#getDelimiter}
             * @param delimiter the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder delimiter(java.lang.String delimiter) {
                this.delimiter = delimiter;
                return this;
            }

            /**
             * Sets the value of {@link FullTextIndexProperty#getIncludeChinese}
             * @param includeChinese the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder includeChinese(java.lang.Boolean includeChinese) {
                this.includeChinese = includeChinese;
                return this;
            }

            /**
             * Sets the value of {@link FullTextIndexProperty#getIncludeChinese}
             * @param includeChinese the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder includeChinese(com.aliyun.ros.cdk.core.IResolvable includeChinese) {
                this.includeChinese = includeChinese;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link FullTextIndexProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public FullTextIndexProperty build() {
                return new Jsii$Proxy(enable, caseSensitive, delimiter, includeChinese);
            }
        }

        /**
         * An implementation for {@link FullTextIndexProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FullTextIndexProperty {
            private final java.lang.Object enable;
            private final java.lang.Object caseSensitive;
            private final java.lang.String delimiter;
            private final java.lang.Object includeChinese;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.caseSensitive = software.amazon.jsii.Kernel.get(this, "caseSensitive", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.delimiter = software.amazon.jsii.Kernel.get(this, "delimiter", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.includeChinese = software.amazon.jsii.Kernel.get(this, "includeChinese", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.Object enable, final java.lang.Object caseSensitive, final java.lang.String delimiter, final java.lang.Object includeChinese) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.enable = java.util.Objects.requireNonNull(enable, "enable is required");
                this.caseSensitive = caseSensitive;
                this.delimiter = delimiter;
                this.includeChinese = includeChinese;
            }

            @Override
            public final java.lang.Object getEnable() {
                return this.enable;
            }

            @Override
            public final java.lang.Object getCaseSensitive() {
                return this.caseSensitive;
            }

            @Override
            public final java.lang.String getDelimiter() {
                return this.delimiter;
            }

            @Override
            public final java.lang.Object getIncludeChinese() {
                return this.includeChinese;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("enable", om.valueToTree(this.getEnable()));
                if (this.getCaseSensitive() != null) {
                    data.set("caseSensitive", om.valueToTree(this.getCaseSensitive()));
                }
                if (this.getDelimiter() != null) {
                    data.set("delimiter", om.valueToTree(this.getDelimiter()));
                }
                if (this.getIncludeChinese() != null) {
                    data.set("includeChinese", om.valueToTree(this.getIncludeChinese()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosIndex.FullTextIndexProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                FullTextIndexProperty.Jsii$Proxy that = (FullTextIndexProperty.Jsii$Proxy) o;

                if (!enable.equals(that.enable)) return false;
                if (this.caseSensitive != null ? !this.caseSensitive.equals(that.caseSensitive) : that.caseSensitive != null) return false;
                if (this.delimiter != null ? !this.delimiter.equals(that.delimiter) : that.delimiter != null) return false;
                return this.includeChinese != null ? this.includeChinese.equals(that.includeChinese) : that.includeChinese == null;
            }

            @Override
            public final int hashCode() {
                int result = this.enable.hashCode();
                result = 31 * result + (this.caseSensitive != null ? this.caseSensitive.hashCode() : 0);
                result = 31 * result + (this.delimiter != null ? this.delimiter.hashCode() : 0);
                result = 31 * result + (this.includeChinese != null ? this.includeChinese.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosIndex.JsonKeyIndicesProperty")
    @software.amazon.jsii.Jsii.Proxy(JsonKeyIndicesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface JsonKeyIndicesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getAlias() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAnalytics() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link JsonKeyIndicesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link JsonKeyIndicesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<JsonKeyIndicesProperty> {
            private java.lang.String name;
            private java.lang.String type;
            private java.lang.String alias;
            private java.lang.Object enableAnalytics;

            /**
             * Sets the value of {@link JsonKeyIndicesProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link JsonKeyIndicesProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link JsonKeyIndicesProperty#getAlias}
             * @param alias the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder alias(java.lang.String alias) {
                this.alias = alias;
                return this;
            }

            /**
             * Sets the value of {@link JsonKeyIndicesProperty#getEnableAnalytics}
             * @param enableAnalytics the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableAnalytics(java.lang.Boolean enableAnalytics) {
                this.enableAnalytics = enableAnalytics;
                return this;
            }

            /**
             * Sets the value of {@link JsonKeyIndicesProperty#getEnableAnalytics}
             * @param enableAnalytics the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableAnalytics(com.aliyun.ros.cdk.core.IResolvable enableAnalytics) {
                this.enableAnalytics = enableAnalytics;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link JsonKeyIndicesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public JsonKeyIndicesProperty build() {
                return new Jsii$Proxy(name, type, alias, enableAnalytics);
            }
        }

        /**
         * An implementation for {@link JsonKeyIndicesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements JsonKeyIndicesProperty {
            private final java.lang.String name;
            private final java.lang.String type;
            private final java.lang.String alias;
            private final java.lang.Object enableAnalytics;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.alias = software.amazon.jsii.Kernel.get(this, "alias", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.enableAnalytics = software.amazon.jsii.Kernel.get(this, "enableAnalytics", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String name, final java.lang.String type, final java.lang.String alias, final java.lang.Object enableAnalytics) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = java.util.Objects.requireNonNull(name, "name is required");
                this.type = java.util.Objects.requireNonNull(type, "type is required");
                this.alias = alias;
                this.enableAnalytics = enableAnalytics;
            }

            @Override
            public final java.lang.String getName() {
                return this.name;
            }

            @Override
            public final java.lang.String getType() {
                return this.type;
            }

            @Override
            public final java.lang.String getAlias() {
                return this.alias;
            }

            @Override
            public final java.lang.Object getEnableAnalytics() {
                return this.enableAnalytics;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("name", om.valueToTree(this.getName()));
                data.set("type", om.valueToTree(this.getType()));
                if (this.getAlias() != null) {
                    data.set("alias", om.valueToTree(this.getAlias()));
                }
                if (this.getEnableAnalytics() != null) {
                    data.set("enableAnalytics", om.valueToTree(this.getEnableAnalytics()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosIndex.JsonKeyIndicesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                JsonKeyIndicesProperty.Jsii$Proxy that = (JsonKeyIndicesProperty.Jsii$Proxy) o;

                if (!name.equals(that.name)) return false;
                if (!type.equals(that.type)) return false;
                if (this.alias != null ? !this.alias.equals(that.alias) : that.alias != null) return false;
                return this.enableAnalytics != null ? this.enableAnalytics.equals(that.enableAnalytics) : that.enableAnalytics == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name.hashCode();
                result = 31 * result + (this.type.hashCode());
                result = 31 * result + (this.alias != null ? this.alias.hashCode() : 0);
                result = 31 * result + (this.enableAnalytics != null ? this.enableAnalytics.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosIndex.KeyIndicesProperty")
    @software.amazon.jsii.Jsii.Proxy(KeyIndicesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface KeyIndicesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getAlias() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCaseSensitive() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getDelimiter() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAnalytics() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIncludeChinese() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getJsonKeyIndices() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link KeyIndicesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link KeyIndicesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<KeyIndicesProperty> {
            private java.lang.String name;
            private java.lang.String type;
            private java.lang.String alias;
            private java.lang.Object caseSensitive;
            private java.lang.String delimiter;
            private java.lang.Object enableAnalytics;
            private java.lang.Object includeChinese;
            private java.lang.Object jsonKeyIndices;

            /**
             * Sets the value of {@link KeyIndicesProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link KeyIndicesProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link KeyIndicesProperty#getAlias}
             * @param alias the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder alias(java.lang.String alias) {
                this.alias = alias;
                return this;
            }

            /**
             * Sets the value of {@link KeyIndicesProperty#getCaseSensitive}
             * @param caseSensitive the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder caseSensitive(java.lang.Boolean caseSensitive) {
                this.caseSensitive = caseSensitive;
                return this;
            }

            /**
             * Sets the value of {@link KeyIndicesProperty#getCaseSensitive}
             * @param caseSensitive the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder caseSensitive(com.aliyun.ros.cdk.core.IResolvable caseSensitive) {
                this.caseSensitive = caseSensitive;
                return this;
            }

            /**
             * Sets the value of {@link KeyIndicesProperty#getDelimiter}
             * @param delimiter the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder delimiter(java.lang.String delimiter) {
                this.delimiter = delimiter;
                return this;
            }

            /**
             * Sets the value of {@link KeyIndicesProperty#getEnableAnalytics}
             * @param enableAnalytics the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableAnalytics(java.lang.Boolean enableAnalytics) {
                this.enableAnalytics = enableAnalytics;
                return this;
            }

            /**
             * Sets the value of {@link KeyIndicesProperty#getEnableAnalytics}
             * @param enableAnalytics the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableAnalytics(com.aliyun.ros.cdk.core.IResolvable enableAnalytics) {
                this.enableAnalytics = enableAnalytics;
                return this;
            }

            /**
             * Sets the value of {@link KeyIndicesProperty#getIncludeChinese}
             * @param includeChinese the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder includeChinese(java.lang.Boolean includeChinese) {
                this.includeChinese = includeChinese;
                return this;
            }

            /**
             * Sets the value of {@link KeyIndicesProperty#getIncludeChinese}
             * @param includeChinese the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder includeChinese(com.aliyun.ros.cdk.core.IResolvable includeChinese) {
                this.includeChinese = includeChinese;
                return this;
            }

            /**
             * Sets the value of {@link KeyIndicesProperty#getJsonKeyIndices}
             * @param jsonKeyIndices the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder jsonKeyIndices(com.aliyun.ros.cdk.core.IResolvable jsonKeyIndices) {
                this.jsonKeyIndices = jsonKeyIndices;
                return this;
            }

            /**
             * Sets the value of {@link KeyIndicesProperty#getJsonKeyIndices}
             * @param jsonKeyIndices the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder jsonKeyIndices(java.util.List<? extends java.lang.Object> jsonKeyIndices) {
                this.jsonKeyIndices = jsonKeyIndices;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link KeyIndicesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public KeyIndicesProperty build() {
                return new Jsii$Proxy(name, type, alias, caseSensitive, delimiter, enableAnalytics, includeChinese, jsonKeyIndices);
            }
        }

        /**
         * An implementation for {@link KeyIndicesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements KeyIndicesProperty {
            private final java.lang.String name;
            private final java.lang.String type;
            private final java.lang.String alias;
            private final java.lang.Object caseSensitive;
            private final java.lang.String delimiter;
            private final java.lang.Object enableAnalytics;
            private final java.lang.Object includeChinese;
            private final java.lang.Object jsonKeyIndices;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.alias = software.amazon.jsii.Kernel.get(this, "alias", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.caseSensitive = software.amazon.jsii.Kernel.get(this, "caseSensitive", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.delimiter = software.amazon.jsii.Kernel.get(this, "delimiter", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.enableAnalytics = software.amazon.jsii.Kernel.get(this, "enableAnalytics", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.includeChinese = software.amazon.jsii.Kernel.get(this, "includeChinese", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.jsonKeyIndices = software.amazon.jsii.Kernel.get(this, "jsonKeyIndices", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String name, final java.lang.String type, final java.lang.String alias, final java.lang.Object caseSensitive, final java.lang.String delimiter, final java.lang.Object enableAnalytics, final java.lang.Object includeChinese, final java.lang.Object jsonKeyIndices) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = java.util.Objects.requireNonNull(name, "name is required");
                this.type = java.util.Objects.requireNonNull(type, "type is required");
                this.alias = alias;
                this.caseSensitive = caseSensitive;
                this.delimiter = delimiter;
                this.enableAnalytics = enableAnalytics;
                this.includeChinese = includeChinese;
                this.jsonKeyIndices = jsonKeyIndices;
            }

            @Override
            public final java.lang.String getName() {
                return this.name;
            }

            @Override
            public final java.lang.String getType() {
                return this.type;
            }

            @Override
            public final java.lang.String getAlias() {
                return this.alias;
            }

            @Override
            public final java.lang.Object getCaseSensitive() {
                return this.caseSensitive;
            }

            @Override
            public final java.lang.String getDelimiter() {
                return this.delimiter;
            }

            @Override
            public final java.lang.Object getEnableAnalytics() {
                return this.enableAnalytics;
            }

            @Override
            public final java.lang.Object getIncludeChinese() {
                return this.includeChinese;
            }

            @Override
            public final java.lang.Object getJsonKeyIndices() {
                return this.jsonKeyIndices;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("name", om.valueToTree(this.getName()));
                data.set("type", om.valueToTree(this.getType()));
                if (this.getAlias() != null) {
                    data.set("alias", om.valueToTree(this.getAlias()));
                }
                if (this.getCaseSensitive() != null) {
                    data.set("caseSensitive", om.valueToTree(this.getCaseSensitive()));
                }
                if (this.getDelimiter() != null) {
                    data.set("delimiter", om.valueToTree(this.getDelimiter()));
                }
                if (this.getEnableAnalytics() != null) {
                    data.set("enableAnalytics", om.valueToTree(this.getEnableAnalytics()));
                }
                if (this.getIncludeChinese() != null) {
                    data.set("includeChinese", om.valueToTree(this.getIncludeChinese()));
                }
                if (this.getJsonKeyIndices() != null) {
                    data.set("jsonKeyIndices", om.valueToTree(this.getJsonKeyIndices()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosIndex.KeyIndicesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                KeyIndicesProperty.Jsii$Proxy that = (KeyIndicesProperty.Jsii$Proxy) o;

                if (!name.equals(that.name)) return false;
                if (!type.equals(that.type)) return false;
                if (this.alias != null ? !this.alias.equals(that.alias) : that.alias != null) return false;
                if (this.caseSensitive != null ? !this.caseSensitive.equals(that.caseSensitive) : that.caseSensitive != null) return false;
                if (this.delimiter != null ? !this.delimiter.equals(that.delimiter) : that.delimiter != null) return false;
                if (this.enableAnalytics != null ? !this.enableAnalytics.equals(that.enableAnalytics) : that.enableAnalytics != null) return false;
                if (this.includeChinese != null ? !this.includeChinese.equals(that.includeChinese) : that.includeChinese != null) return false;
                return this.jsonKeyIndices != null ? this.jsonKeyIndices.equals(that.jsonKeyIndices) : that.jsonKeyIndices == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name.hashCode();
                result = 31 * result + (this.type.hashCode());
                result = 31 * result + (this.alias != null ? this.alias.hashCode() : 0);
                result = 31 * result + (this.caseSensitive != null ? this.caseSensitive.hashCode() : 0);
                result = 31 * result + (this.delimiter != null ? this.delimiter.hashCode() : 0);
                result = 31 * result + (this.enableAnalytics != null ? this.enableAnalytics.hashCode() : 0);
                result = 31 * result + (this.includeChinese != null ? this.includeChinese.hashCode() : 0);
                result = 31 * result + (this.jsonKeyIndices != null ? this.jsonKeyIndices.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sls.RosIndex}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sls.RosIndex> {
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
        private final com.aliyun.ros.cdk.sls.RosIndexProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sls.RosIndexProps.Builder();
        }

        /**
         * @return {@code this}
         * @param fullTextIndex This parameter is required.
         */
        public Builder fullTextIndex(final com.aliyun.ros.cdk.core.IResolvable fullTextIndex) {
            this.props.fullTextIndex(fullTextIndex);
            return this;
        }
        /**
         * @return {@code this}
         * @param fullTextIndex This parameter is required.
         */
        public Builder fullTextIndex(final com.aliyun.ros.cdk.sls.RosIndex.FullTextIndexProperty fullTextIndex) {
            this.props.fullTextIndex(fullTextIndex);
            return this;
        }

        /**
         * @return {@code this}
         * @param logstoreName This parameter is required.
         */
        public Builder logstoreName(final java.lang.String logstoreName) {
            this.props.logstoreName(logstoreName);
            return this;
        }

        /**
         * @return {@code this}
         * @param projectName This parameter is required.
         */
        public Builder projectName(final java.lang.String projectName) {
            this.props.projectName(projectName);
            return this;
        }

        /**
         * @return {@code this}
         * @param keyIndices This parameter is required.
         */
        public Builder keyIndices(final com.aliyun.ros.cdk.core.IResolvable keyIndices) {
            this.props.keyIndices(keyIndices);
            return this;
        }
        /**
         * @return {@code this}
         * @param keyIndices This parameter is required.
         */
        public Builder keyIndices(final java.util.List<? extends java.lang.Object> keyIndices) {
            this.props.keyIndices(keyIndices);
            return this;
        }

        /**
         * @return {@code this}
         * @param logReduce This parameter is required.
         */
        public Builder logReduce(final java.lang.Boolean logReduce) {
            this.props.logReduce(logReduce);
            return this;
        }
        /**
         * @return {@code this}
         * @param logReduce This parameter is required.
         */
        public Builder logReduce(final com.aliyun.ros.cdk.core.IResolvable logReduce) {
            this.props.logReduce(logReduce);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.sls.RosIndex}.
         */
        @Override
        public com.aliyun.ros.cdk.sls.RosIndex build() {
            return new com.aliyun.ros.cdk.sls.RosIndex(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
