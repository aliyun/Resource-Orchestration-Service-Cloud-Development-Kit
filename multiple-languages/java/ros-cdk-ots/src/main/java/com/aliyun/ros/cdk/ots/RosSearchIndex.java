package com.aliyun.ros.cdk.ots;

/**
 * A ROS template type:  <code>ALIYUN::OTS::SearchIndex</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:38.626Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.RosSearchIndex")
public class RosSearchIndex extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSearchIndex(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSearchIndex(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ots.RosSearchIndex.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::OTS::SearchIndex</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSearchIndex(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ots.RosSearchIndexProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIndexName() {
        return software.amazon.jsii.Kernel.get(this, "attrIndexName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getFieldSchemas() {
        return software.amazon.jsii.Kernel.get(this, "fieldSchemas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFieldSchemas(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "fieldSchemas", java.util.Objects.requireNonNull(value, "fieldSchemas is required"));
    }

    /**
     */
    public void setFieldSchemas(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ots.RosSearchIndex.FieldSchemasProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ots.RosSearchIndex.FieldSchemasProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "fieldSchemas", java.util.Objects.requireNonNull(value, "fieldSchemas is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getIndexName() {
        return software.amazon.jsii.Kernel.get(this, "indexName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIndexName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "indexName", java.util.Objects.requireNonNull(value, "indexName is required"));
    }

    /**
     */
    public void setIndexName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "indexName", java.util.Objects.requireNonNull(value, "indexName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceName", java.util.Objects.requireNonNull(value, "instanceName is required"));
    }

    /**
     */
    public void setInstanceName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceName", java.util.Objects.requireNonNull(value, "instanceName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTableName() {
        return software.amazon.jsii.Kernel.get(this, "tableName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTableName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "tableName", java.util.Objects.requireNonNull(value, "tableName is required"));
    }

    /**
     */
    public void setTableName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tableName", java.util.Objects.requireNonNull(value, "tableName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIndexSetting() {
        return software.amazon.jsii.Kernel.get(this, "indexSetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIndexSetting(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "indexSetting", value);
    }

    /**
     */
    public void setIndexSetting(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ots.RosSearchIndex.IndexSettingProperty value) {
        software.amazon.jsii.Kernel.set(this, "indexSetting", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIndexSort() {
        return software.amazon.jsii.Kernel.get(this, "indexSort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIndexSort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "indexSort", value);
    }

    /**
     */
    public void setIndexSort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ots.RosSearchIndex.IndexSortProperty value) {
        software.amazon.jsii.Kernel.set(this, "indexSort", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.RosSearchIndex.FieldSchemasProperty")
    @software.amazon.jsii.Jsii.Proxy(FieldSchemasProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface FieldSchemasProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getFieldName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getFieldType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAnalyzer() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableSortAndAgg() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIndex() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIsArray() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getSubFieldSchemas() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link FieldSchemasProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link FieldSchemasProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<FieldSchemasProperty> {
            java.lang.Object fieldName;
            java.lang.Object fieldType;
            java.lang.Object analyzer;
            java.lang.Object enableSortAndAgg;
            java.lang.Object index;
            java.lang.Object isArray;
            java.lang.Object store;
            java.lang.Object subFieldSchemas;

            /**
             * Sets the value of {@link FieldSchemasProperty#getFieldName}
             * @param fieldName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fieldName(java.lang.String fieldName) {
                this.fieldName = fieldName;
                return this;
            }

            /**
             * Sets the value of {@link FieldSchemasProperty#getFieldName}
             * @param fieldName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fieldName(com.aliyun.ros.cdk.core.IResolvable fieldName) {
                this.fieldName = fieldName;
                return this;
            }

            /**
             * Sets the value of {@link FieldSchemasProperty#getFieldType}
             * @param fieldType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fieldType(java.lang.String fieldType) {
                this.fieldType = fieldType;
                return this;
            }

            /**
             * Sets the value of {@link FieldSchemasProperty#getFieldType}
             * @param fieldType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fieldType(com.aliyun.ros.cdk.core.IResolvable fieldType) {
                this.fieldType = fieldType;
                return this;
            }

            /**
             * Sets the value of {@link FieldSchemasProperty#getAnalyzer}
             * @param analyzer the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder analyzer(java.lang.String analyzer) {
                this.analyzer = analyzer;
                return this;
            }

            /**
             * Sets the value of {@link FieldSchemasProperty#getAnalyzer}
             * @param analyzer the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder analyzer(com.aliyun.ros.cdk.core.IResolvable analyzer) {
                this.analyzer = analyzer;
                return this;
            }

            /**
             * Sets the value of {@link FieldSchemasProperty#getEnableSortAndAgg}
             * @param enableSortAndAgg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableSortAndAgg(java.lang.Boolean enableSortAndAgg) {
                this.enableSortAndAgg = enableSortAndAgg;
                return this;
            }

            /**
             * Sets the value of {@link FieldSchemasProperty#getEnableSortAndAgg}
             * @param enableSortAndAgg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableSortAndAgg(com.aliyun.ros.cdk.core.IResolvable enableSortAndAgg) {
                this.enableSortAndAgg = enableSortAndAgg;
                return this;
            }

            /**
             * Sets the value of {@link FieldSchemasProperty#getIndex}
             * @param index the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder index(java.lang.Boolean index) {
                this.index = index;
                return this;
            }

            /**
             * Sets the value of {@link FieldSchemasProperty#getIndex}
             * @param index the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder index(com.aliyun.ros.cdk.core.IResolvable index) {
                this.index = index;
                return this;
            }

            /**
             * Sets the value of {@link FieldSchemasProperty#getIsArray}
             * @param isArray the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isArray(java.lang.Boolean isArray) {
                this.isArray = isArray;
                return this;
            }

            /**
             * Sets the value of {@link FieldSchemasProperty#getIsArray}
             * @param isArray the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isArray(com.aliyun.ros.cdk.core.IResolvable isArray) {
                this.isArray = isArray;
                return this;
            }

            /**
             * Sets the value of {@link FieldSchemasProperty#getStore}
             * @param store the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder store(java.lang.Boolean store) {
                this.store = store;
                return this;
            }

            /**
             * Sets the value of {@link FieldSchemasProperty#getStore}
             * @param store the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder store(com.aliyun.ros.cdk.core.IResolvable store) {
                this.store = store;
                return this;
            }

            /**
             * Sets the value of {@link FieldSchemasProperty#getSubFieldSchemas}
             * @param subFieldSchemas the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder subFieldSchemas(com.aliyun.ros.cdk.core.IResolvable subFieldSchemas) {
                this.subFieldSchemas = subFieldSchemas;
                return this;
            }

            /**
             * Sets the value of {@link FieldSchemasProperty#getSubFieldSchemas}
             * @param subFieldSchemas the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder subFieldSchemas(java.util.List<? extends java.lang.Object> subFieldSchemas) {
                this.subFieldSchemas = subFieldSchemas;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link FieldSchemasProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public FieldSchemasProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link FieldSchemasProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FieldSchemasProperty {
            private final java.lang.Object fieldName;
            private final java.lang.Object fieldType;
            private final java.lang.Object analyzer;
            private final java.lang.Object enableSortAndAgg;
            private final java.lang.Object index;
            private final java.lang.Object isArray;
            private final java.lang.Object store;
            private final java.lang.Object subFieldSchemas;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.fieldName = software.amazon.jsii.Kernel.get(this, "fieldName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fieldType = software.amazon.jsii.Kernel.get(this, "fieldType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.analyzer = software.amazon.jsii.Kernel.get(this, "analyzer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableSortAndAgg = software.amazon.jsii.Kernel.get(this, "enableSortAndAgg", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.index = software.amazon.jsii.Kernel.get(this, "index", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.isArray = software.amazon.jsii.Kernel.get(this, "isArray", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.store = software.amazon.jsii.Kernel.get(this, "store", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.subFieldSchemas = software.amazon.jsii.Kernel.get(this, "subFieldSchemas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.fieldName = java.util.Objects.requireNonNull(builder.fieldName, "fieldName is required");
                this.fieldType = java.util.Objects.requireNonNull(builder.fieldType, "fieldType is required");
                this.analyzer = builder.analyzer;
                this.enableSortAndAgg = builder.enableSortAndAgg;
                this.index = builder.index;
                this.isArray = builder.isArray;
                this.store = builder.store;
                this.subFieldSchemas = builder.subFieldSchemas;
            }

            @Override
            public final java.lang.Object getFieldName() {
                return this.fieldName;
            }

            @Override
            public final java.lang.Object getFieldType() {
                return this.fieldType;
            }

            @Override
            public final java.lang.Object getAnalyzer() {
                return this.analyzer;
            }

            @Override
            public final java.lang.Object getEnableSortAndAgg() {
                return this.enableSortAndAgg;
            }

            @Override
            public final java.lang.Object getIndex() {
                return this.index;
            }

            @Override
            public final java.lang.Object getIsArray() {
                return this.isArray;
            }

            @Override
            public final java.lang.Object getStore() {
                return this.store;
            }

            @Override
            public final java.lang.Object getSubFieldSchemas() {
                return this.subFieldSchemas;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("fieldName", om.valueToTree(this.getFieldName()));
                data.set("fieldType", om.valueToTree(this.getFieldType()));
                if (this.getAnalyzer() != null) {
                    data.set("analyzer", om.valueToTree(this.getAnalyzer()));
                }
                if (this.getEnableSortAndAgg() != null) {
                    data.set("enableSortAndAgg", om.valueToTree(this.getEnableSortAndAgg()));
                }
                if (this.getIndex() != null) {
                    data.set("index", om.valueToTree(this.getIndex()));
                }
                if (this.getIsArray() != null) {
                    data.set("isArray", om.valueToTree(this.getIsArray()));
                }
                if (this.getStore() != null) {
                    data.set("store", om.valueToTree(this.getStore()));
                }
                if (this.getSubFieldSchemas() != null) {
                    data.set("subFieldSchemas", om.valueToTree(this.getSubFieldSchemas()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ots.RosSearchIndex.FieldSchemasProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                FieldSchemasProperty.Jsii$Proxy that = (FieldSchemasProperty.Jsii$Proxy) o;

                if (!fieldName.equals(that.fieldName)) return false;
                if (!fieldType.equals(that.fieldType)) return false;
                if (this.analyzer != null ? !this.analyzer.equals(that.analyzer) : that.analyzer != null) return false;
                if (this.enableSortAndAgg != null ? !this.enableSortAndAgg.equals(that.enableSortAndAgg) : that.enableSortAndAgg != null) return false;
                if (this.index != null ? !this.index.equals(that.index) : that.index != null) return false;
                if (this.isArray != null ? !this.isArray.equals(that.isArray) : that.isArray != null) return false;
                if (this.store != null ? !this.store.equals(that.store) : that.store != null) return false;
                return this.subFieldSchemas != null ? this.subFieldSchemas.equals(that.subFieldSchemas) : that.subFieldSchemas == null;
            }

            @Override
            public final int hashCode() {
                int result = this.fieldName.hashCode();
                result = 31 * result + (this.fieldType.hashCode());
                result = 31 * result + (this.analyzer != null ? this.analyzer.hashCode() : 0);
                result = 31 * result + (this.enableSortAndAgg != null ? this.enableSortAndAgg.hashCode() : 0);
                result = 31 * result + (this.index != null ? this.index.hashCode() : 0);
                result = 31 * result + (this.isArray != null ? this.isArray.hashCode() : 0);
                result = 31 * result + (this.store != null ? this.store.hashCode() : 0);
                result = 31 * result + (this.subFieldSchemas != null ? this.subFieldSchemas.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.RosSearchIndex.FieldSortProperty")
    @software.amazon.jsii.Jsii.Proxy(FieldSortProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface FieldSortProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getFieldName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSortMode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSortOrder() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link FieldSortProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link FieldSortProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<FieldSortProperty> {
            java.lang.Object fieldName;
            java.lang.Object sortMode;
            java.lang.Object sortOrder;

            /**
             * Sets the value of {@link FieldSortProperty#getFieldName}
             * @param fieldName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fieldName(java.lang.String fieldName) {
                this.fieldName = fieldName;
                return this;
            }

            /**
             * Sets the value of {@link FieldSortProperty#getFieldName}
             * @param fieldName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fieldName(com.aliyun.ros.cdk.core.IResolvable fieldName) {
                this.fieldName = fieldName;
                return this;
            }

            /**
             * Sets the value of {@link FieldSortProperty#getSortMode}
             * @param sortMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sortMode(java.lang.String sortMode) {
                this.sortMode = sortMode;
                return this;
            }

            /**
             * Sets the value of {@link FieldSortProperty#getSortMode}
             * @param sortMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sortMode(com.aliyun.ros.cdk.core.IResolvable sortMode) {
                this.sortMode = sortMode;
                return this;
            }

            /**
             * Sets the value of {@link FieldSortProperty#getSortOrder}
             * @param sortOrder the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sortOrder(java.lang.String sortOrder) {
                this.sortOrder = sortOrder;
                return this;
            }

            /**
             * Sets the value of {@link FieldSortProperty#getSortOrder}
             * @param sortOrder the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sortOrder(com.aliyun.ros.cdk.core.IResolvable sortOrder) {
                this.sortOrder = sortOrder;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link FieldSortProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public FieldSortProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link FieldSortProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FieldSortProperty {
            private final java.lang.Object fieldName;
            private final java.lang.Object sortMode;
            private final java.lang.Object sortOrder;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.fieldName = software.amazon.jsii.Kernel.get(this, "fieldName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sortMode = software.amazon.jsii.Kernel.get(this, "sortMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sortOrder = software.amazon.jsii.Kernel.get(this, "sortOrder", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.fieldName = java.util.Objects.requireNonNull(builder.fieldName, "fieldName is required");
                this.sortMode = builder.sortMode;
                this.sortOrder = builder.sortOrder;
            }

            @Override
            public final java.lang.Object getFieldName() {
                return this.fieldName;
            }

            @Override
            public final java.lang.Object getSortMode() {
                return this.sortMode;
            }

            @Override
            public final java.lang.Object getSortOrder() {
                return this.sortOrder;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("fieldName", om.valueToTree(this.getFieldName()));
                if (this.getSortMode() != null) {
                    data.set("sortMode", om.valueToTree(this.getSortMode()));
                }
                if (this.getSortOrder() != null) {
                    data.set("sortOrder", om.valueToTree(this.getSortOrder()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ots.RosSearchIndex.FieldSortProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                FieldSortProperty.Jsii$Proxy that = (FieldSortProperty.Jsii$Proxy) o;

                if (!fieldName.equals(that.fieldName)) return false;
                if (this.sortMode != null ? !this.sortMode.equals(that.sortMode) : that.sortMode != null) return false;
                return this.sortOrder != null ? this.sortOrder.equals(that.sortOrder) : that.sortOrder == null;
            }

            @Override
            public final int hashCode() {
                int result = this.fieldName.hashCode();
                result = 31 * result + (this.sortMode != null ? this.sortMode.hashCode() : 0);
                result = 31 * result + (this.sortOrder != null ? this.sortOrder.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.RosSearchIndex.GeoDistanceSortProperty")
    @software.amazon.jsii.Jsii.Proxy(GeoDistanceSortProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface GeoDistanceSortProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getFieldName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPoints();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSortMode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSortOrder() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link GeoDistanceSortProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link GeoDistanceSortProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<GeoDistanceSortProperty> {
            java.lang.Object fieldName;
            java.lang.Object points;
            java.lang.Object sortMode;
            java.lang.Object sortOrder;

            /**
             * Sets the value of {@link GeoDistanceSortProperty#getFieldName}
             * @param fieldName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fieldName(java.lang.String fieldName) {
                this.fieldName = fieldName;
                return this;
            }

            /**
             * Sets the value of {@link GeoDistanceSortProperty#getFieldName}
             * @param fieldName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fieldName(com.aliyun.ros.cdk.core.IResolvable fieldName) {
                this.fieldName = fieldName;
                return this;
            }

            /**
             * Sets the value of {@link GeoDistanceSortProperty#getPoints}
             * @param points the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder points(java.util.List<? extends java.lang.Object> points) {
                this.points = points;
                return this;
            }

            /**
             * Sets the value of {@link GeoDistanceSortProperty#getPoints}
             * @param points the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder points(com.aliyun.ros.cdk.core.IResolvable points) {
                this.points = points;
                return this;
            }

            /**
             * Sets the value of {@link GeoDistanceSortProperty#getSortMode}
             * @param sortMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sortMode(java.lang.String sortMode) {
                this.sortMode = sortMode;
                return this;
            }

            /**
             * Sets the value of {@link GeoDistanceSortProperty#getSortMode}
             * @param sortMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sortMode(com.aliyun.ros.cdk.core.IResolvable sortMode) {
                this.sortMode = sortMode;
                return this;
            }

            /**
             * Sets the value of {@link GeoDistanceSortProperty#getSortOrder}
             * @param sortOrder the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sortOrder(java.lang.String sortOrder) {
                this.sortOrder = sortOrder;
                return this;
            }

            /**
             * Sets the value of {@link GeoDistanceSortProperty#getSortOrder}
             * @param sortOrder the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sortOrder(com.aliyun.ros.cdk.core.IResolvable sortOrder) {
                this.sortOrder = sortOrder;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link GeoDistanceSortProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public GeoDistanceSortProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link GeoDistanceSortProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements GeoDistanceSortProperty {
            private final java.lang.Object fieldName;
            private final java.lang.Object points;
            private final java.lang.Object sortMode;
            private final java.lang.Object sortOrder;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.fieldName = software.amazon.jsii.Kernel.get(this, "fieldName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.points = software.amazon.jsii.Kernel.get(this, "points", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sortMode = software.amazon.jsii.Kernel.get(this, "sortMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sortOrder = software.amazon.jsii.Kernel.get(this, "sortOrder", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.fieldName = java.util.Objects.requireNonNull(builder.fieldName, "fieldName is required");
                this.points = java.util.Objects.requireNonNull(builder.points, "points is required");
                this.sortMode = builder.sortMode;
                this.sortOrder = builder.sortOrder;
            }

            @Override
            public final java.lang.Object getFieldName() {
                return this.fieldName;
            }

            @Override
            public final java.lang.Object getPoints() {
                return this.points;
            }

            @Override
            public final java.lang.Object getSortMode() {
                return this.sortMode;
            }

            @Override
            public final java.lang.Object getSortOrder() {
                return this.sortOrder;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("fieldName", om.valueToTree(this.getFieldName()));
                data.set("points", om.valueToTree(this.getPoints()));
                if (this.getSortMode() != null) {
                    data.set("sortMode", om.valueToTree(this.getSortMode()));
                }
                if (this.getSortOrder() != null) {
                    data.set("sortOrder", om.valueToTree(this.getSortOrder()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ots.RosSearchIndex.GeoDistanceSortProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                GeoDistanceSortProperty.Jsii$Proxy that = (GeoDistanceSortProperty.Jsii$Proxy) o;

                if (!fieldName.equals(that.fieldName)) return false;
                if (!points.equals(that.points)) return false;
                if (this.sortMode != null ? !this.sortMode.equals(that.sortMode) : that.sortMode != null) return false;
                return this.sortOrder != null ? this.sortOrder.equals(that.sortOrder) : that.sortOrder == null;
            }

            @Override
            public final int hashCode() {
                int result = this.fieldName.hashCode();
                result = 31 * result + (this.points.hashCode());
                result = 31 * result + (this.sortMode != null ? this.sortMode.hashCode() : 0);
                result = 31 * result + (this.sortOrder != null ? this.sortOrder.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.RosSearchIndex.IndexSettingProperty")
    @software.amazon.jsii.Jsii.Proxy(IndexSettingProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface IndexSettingProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRoutingFields() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link IndexSettingProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link IndexSettingProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<IndexSettingProperty> {
            java.lang.Object routingFields;

            /**
             * Sets the value of {@link IndexSettingProperty#getRoutingFields}
             * @param routingFields the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder routingFields(java.util.List<? extends java.lang.Object> routingFields) {
                this.routingFields = routingFields;
                return this;
            }

            /**
             * Sets the value of {@link IndexSettingProperty#getRoutingFields}
             * @param routingFields the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder routingFields(com.aliyun.ros.cdk.core.IResolvable routingFields) {
                this.routingFields = routingFields;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link IndexSettingProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public IndexSettingProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link IndexSettingProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IndexSettingProperty {
            private final java.lang.Object routingFields;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.routingFields = software.amazon.jsii.Kernel.get(this, "routingFields", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.routingFields = builder.routingFields;
            }

            @Override
            public final java.lang.Object getRoutingFields() {
                return this.routingFields;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getRoutingFields() != null) {
                    data.set("routingFields", om.valueToTree(this.getRoutingFields()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ots.RosSearchIndex.IndexSettingProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                IndexSettingProperty.Jsii$Proxy that = (IndexSettingProperty.Jsii$Proxy) o;

                return this.routingFields != null ? this.routingFields.equals(that.routingFields) : that.routingFields == null;
            }

            @Override
            public final int hashCode() {
                int result = this.routingFields != null ? this.routingFields.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.RosSearchIndex.IndexSortProperty")
    @software.amazon.jsii.Jsii.Proxy(IndexSortProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface IndexSortProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSorters();

        /**
         * @return a {@link Builder} of {@link IndexSortProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link IndexSortProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<IndexSortProperty> {
            java.lang.Object sorters;

            /**
             * Sets the value of {@link IndexSortProperty#getSorters}
             * @param sorters the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sorters(com.aliyun.ros.cdk.core.IResolvable sorters) {
                this.sorters = sorters;
                return this;
            }

            /**
             * Sets the value of {@link IndexSortProperty#getSorters}
             * @param sorters the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sorters(java.util.List<? extends java.lang.Object> sorters) {
                this.sorters = sorters;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link IndexSortProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public IndexSortProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link IndexSortProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IndexSortProperty {
            private final java.lang.Object sorters;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.sorters = software.amazon.jsii.Kernel.get(this, "sorters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.sorters = java.util.Objects.requireNonNull(builder.sorters, "sorters is required");
            }

            @Override
            public final java.lang.Object getSorters() {
                return this.sorters;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("sorters", om.valueToTree(this.getSorters()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ots.RosSearchIndex.IndexSortProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                IndexSortProperty.Jsii$Proxy that = (IndexSortProperty.Jsii$Proxy) o;

                return this.sorters.equals(that.sorters);
            }

            @Override
            public final int hashCode() {
                int result = this.sorters.hashCode();
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.RosSearchIndex.PrimaryKeySortProperty")
    @software.amazon.jsii.Jsii.Proxy(PrimaryKeySortProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PrimaryKeySortProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSortOrder() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PrimaryKeySortProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PrimaryKeySortProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PrimaryKeySortProperty> {
            java.lang.Object sortOrder;

            /**
             * Sets the value of {@link PrimaryKeySortProperty#getSortOrder}
             * @param sortOrder the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sortOrder(java.lang.String sortOrder) {
                this.sortOrder = sortOrder;
                return this;
            }

            /**
             * Sets the value of {@link PrimaryKeySortProperty#getSortOrder}
             * @param sortOrder the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sortOrder(com.aliyun.ros.cdk.core.IResolvable sortOrder) {
                this.sortOrder = sortOrder;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PrimaryKeySortProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PrimaryKeySortProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PrimaryKeySortProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PrimaryKeySortProperty {
            private final java.lang.Object sortOrder;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.sortOrder = software.amazon.jsii.Kernel.get(this, "sortOrder", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.sortOrder = builder.sortOrder;
            }

            @Override
            public final java.lang.Object getSortOrder() {
                return this.sortOrder;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getSortOrder() != null) {
                    data.set("sortOrder", om.valueToTree(this.getSortOrder()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ots.RosSearchIndex.PrimaryKeySortProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PrimaryKeySortProperty.Jsii$Proxy that = (PrimaryKeySortProperty.Jsii$Proxy) o;

                return this.sortOrder != null ? this.sortOrder.equals(that.sortOrder) : that.sortOrder == null;
            }

            @Override
            public final int hashCode() {
                int result = this.sortOrder != null ? this.sortOrder.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.RosSearchIndex.ScoreSortProperty")
    @software.amazon.jsii.Jsii.Proxy(ScoreSortProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ScoreSortProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSortOrder() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ScoreSortProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ScoreSortProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ScoreSortProperty> {
            java.lang.Object sortOrder;

            /**
             * Sets the value of {@link ScoreSortProperty#getSortOrder}
             * @param sortOrder the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sortOrder(java.lang.String sortOrder) {
                this.sortOrder = sortOrder;
                return this;
            }

            /**
             * Sets the value of {@link ScoreSortProperty#getSortOrder}
             * @param sortOrder the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sortOrder(com.aliyun.ros.cdk.core.IResolvable sortOrder) {
                this.sortOrder = sortOrder;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ScoreSortProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ScoreSortProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ScoreSortProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ScoreSortProperty {
            private final java.lang.Object sortOrder;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.sortOrder = software.amazon.jsii.Kernel.get(this, "sortOrder", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.sortOrder = builder.sortOrder;
            }

            @Override
            public final java.lang.Object getSortOrder() {
                return this.sortOrder;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getSortOrder() != null) {
                    data.set("sortOrder", om.valueToTree(this.getSortOrder()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ots.RosSearchIndex.ScoreSortProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ScoreSortProperty.Jsii$Proxy that = (ScoreSortProperty.Jsii$Proxy) o;

                return this.sortOrder != null ? this.sortOrder.equals(that.sortOrder) : that.sortOrder == null;
            }

            @Override
            public final int hashCode() {
                int result = this.sortOrder != null ? this.sortOrder.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.RosSearchIndex.SortersProperty")
    @software.amazon.jsii.Jsii.Proxy(SortersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SortersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFieldSort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGeoDistanceSort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPrimaryKeySort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getScoreSort() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SortersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SortersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SortersProperty> {
            java.lang.Object fieldSort;
            java.lang.Object geoDistanceSort;
            java.lang.Object primaryKeySort;
            java.lang.Object scoreSort;

            /**
             * Sets the value of {@link SortersProperty#getFieldSort}
             * @param fieldSort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fieldSort(com.aliyun.ros.cdk.core.IResolvable fieldSort) {
                this.fieldSort = fieldSort;
                return this;
            }

            /**
             * Sets the value of {@link SortersProperty#getFieldSort}
             * @param fieldSort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fieldSort(com.aliyun.ros.cdk.ots.RosSearchIndex.FieldSortProperty fieldSort) {
                this.fieldSort = fieldSort;
                return this;
            }

            /**
             * Sets the value of {@link SortersProperty#getGeoDistanceSort}
             * @param geoDistanceSort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder geoDistanceSort(com.aliyun.ros.cdk.core.IResolvable geoDistanceSort) {
                this.geoDistanceSort = geoDistanceSort;
                return this;
            }

            /**
             * Sets the value of {@link SortersProperty#getGeoDistanceSort}
             * @param geoDistanceSort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder geoDistanceSort(com.aliyun.ros.cdk.ots.RosSearchIndex.GeoDistanceSortProperty geoDistanceSort) {
                this.geoDistanceSort = geoDistanceSort;
                return this;
            }

            /**
             * Sets the value of {@link SortersProperty#getPrimaryKeySort}
             * @param primaryKeySort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder primaryKeySort(com.aliyun.ros.cdk.core.IResolvable primaryKeySort) {
                this.primaryKeySort = primaryKeySort;
                return this;
            }

            /**
             * Sets the value of {@link SortersProperty#getPrimaryKeySort}
             * @param primaryKeySort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder primaryKeySort(com.aliyun.ros.cdk.ots.RosSearchIndex.PrimaryKeySortProperty primaryKeySort) {
                this.primaryKeySort = primaryKeySort;
                return this;
            }

            /**
             * Sets the value of {@link SortersProperty#getScoreSort}
             * @param scoreSort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scoreSort(com.aliyun.ros.cdk.core.IResolvable scoreSort) {
                this.scoreSort = scoreSort;
                return this;
            }

            /**
             * Sets the value of {@link SortersProperty#getScoreSort}
             * @param scoreSort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scoreSort(com.aliyun.ros.cdk.ots.RosSearchIndex.ScoreSortProperty scoreSort) {
                this.scoreSort = scoreSort;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SortersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SortersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SortersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SortersProperty {
            private final java.lang.Object fieldSort;
            private final java.lang.Object geoDistanceSort;
            private final java.lang.Object primaryKeySort;
            private final java.lang.Object scoreSort;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.fieldSort = software.amazon.jsii.Kernel.get(this, "fieldSort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.geoDistanceSort = software.amazon.jsii.Kernel.get(this, "geoDistanceSort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.primaryKeySort = software.amazon.jsii.Kernel.get(this, "primaryKeySort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.scoreSort = software.amazon.jsii.Kernel.get(this, "scoreSort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.fieldSort = builder.fieldSort;
                this.geoDistanceSort = builder.geoDistanceSort;
                this.primaryKeySort = builder.primaryKeySort;
                this.scoreSort = builder.scoreSort;
            }

            @Override
            public final java.lang.Object getFieldSort() {
                return this.fieldSort;
            }

            @Override
            public final java.lang.Object getGeoDistanceSort() {
                return this.geoDistanceSort;
            }

            @Override
            public final java.lang.Object getPrimaryKeySort() {
                return this.primaryKeySort;
            }

            @Override
            public final java.lang.Object getScoreSort() {
                return this.scoreSort;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getFieldSort() != null) {
                    data.set("fieldSort", om.valueToTree(this.getFieldSort()));
                }
                if (this.getGeoDistanceSort() != null) {
                    data.set("geoDistanceSort", om.valueToTree(this.getGeoDistanceSort()));
                }
                if (this.getPrimaryKeySort() != null) {
                    data.set("primaryKeySort", om.valueToTree(this.getPrimaryKeySort()));
                }
                if (this.getScoreSort() != null) {
                    data.set("scoreSort", om.valueToTree(this.getScoreSort()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ots.RosSearchIndex.SortersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SortersProperty.Jsii$Proxy that = (SortersProperty.Jsii$Proxy) o;

                if (this.fieldSort != null ? !this.fieldSort.equals(that.fieldSort) : that.fieldSort != null) return false;
                if (this.geoDistanceSort != null ? !this.geoDistanceSort.equals(that.geoDistanceSort) : that.geoDistanceSort != null) return false;
                if (this.primaryKeySort != null ? !this.primaryKeySort.equals(that.primaryKeySort) : that.primaryKeySort != null) return false;
                return this.scoreSort != null ? this.scoreSort.equals(that.scoreSort) : that.scoreSort == null;
            }

            @Override
            public final int hashCode() {
                int result = this.fieldSort != null ? this.fieldSort.hashCode() : 0;
                result = 31 * result + (this.geoDistanceSort != null ? this.geoDistanceSort.hashCode() : 0);
                result = 31 * result + (this.primaryKeySort != null ? this.primaryKeySort.hashCode() : 0);
                result = 31 * result + (this.scoreSort != null ? this.scoreSort.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.RosSearchIndex.SubFieldSchemasProperty")
    @software.amazon.jsii.Jsii.Proxy(SubFieldSchemasProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SubFieldSchemasProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getFieldName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getFieldType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAnalyzer() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableSortAndAgg() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIndex() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIsArray() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStore() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SubFieldSchemasProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SubFieldSchemasProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SubFieldSchemasProperty> {
            java.lang.Object fieldName;
            java.lang.Object fieldType;
            java.lang.Object analyzer;
            java.lang.Object enableSortAndAgg;
            java.lang.Object index;
            java.lang.Object isArray;
            java.lang.Object store;

            /**
             * Sets the value of {@link SubFieldSchemasProperty#getFieldName}
             * @param fieldName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fieldName(java.lang.String fieldName) {
                this.fieldName = fieldName;
                return this;
            }

            /**
             * Sets the value of {@link SubFieldSchemasProperty#getFieldName}
             * @param fieldName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fieldName(com.aliyun.ros.cdk.core.IResolvable fieldName) {
                this.fieldName = fieldName;
                return this;
            }

            /**
             * Sets the value of {@link SubFieldSchemasProperty#getFieldType}
             * @param fieldType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fieldType(java.lang.String fieldType) {
                this.fieldType = fieldType;
                return this;
            }

            /**
             * Sets the value of {@link SubFieldSchemasProperty#getFieldType}
             * @param fieldType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fieldType(com.aliyun.ros.cdk.core.IResolvable fieldType) {
                this.fieldType = fieldType;
                return this;
            }

            /**
             * Sets the value of {@link SubFieldSchemasProperty#getAnalyzer}
             * @param analyzer the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder analyzer(java.lang.String analyzer) {
                this.analyzer = analyzer;
                return this;
            }

            /**
             * Sets the value of {@link SubFieldSchemasProperty#getAnalyzer}
             * @param analyzer the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder analyzer(com.aliyun.ros.cdk.core.IResolvable analyzer) {
                this.analyzer = analyzer;
                return this;
            }

            /**
             * Sets the value of {@link SubFieldSchemasProperty#getEnableSortAndAgg}
             * @param enableSortAndAgg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableSortAndAgg(java.lang.Boolean enableSortAndAgg) {
                this.enableSortAndAgg = enableSortAndAgg;
                return this;
            }

            /**
             * Sets the value of {@link SubFieldSchemasProperty#getEnableSortAndAgg}
             * @param enableSortAndAgg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableSortAndAgg(com.aliyun.ros.cdk.core.IResolvable enableSortAndAgg) {
                this.enableSortAndAgg = enableSortAndAgg;
                return this;
            }

            /**
             * Sets the value of {@link SubFieldSchemasProperty#getIndex}
             * @param index the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder index(java.lang.Boolean index) {
                this.index = index;
                return this;
            }

            /**
             * Sets the value of {@link SubFieldSchemasProperty#getIndex}
             * @param index the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder index(com.aliyun.ros.cdk.core.IResolvable index) {
                this.index = index;
                return this;
            }

            /**
             * Sets the value of {@link SubFieldSchemasProperty#getIsArray}
             * @param isArray the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isArray(java.lang.Boolean isArray) {
                this.isArray = isArray;
                return this;
            }

            /**
             * Sets the value of {@link SubFieldSchemasProperty#getIsArray}
             * @param isArray the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isArray(com.aliyun.ros.cdk.core.IResolvable isArray) {
                this.isArray = isArray;
                return this;
            }

            /**
             * Sets the value of {@link SubFieldSchemasProperty#getStore}
             * @param store the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder store(java.lang.Boolean store) {
                this.store = store;
                return this;
            }

            /**
             * Sets the value of {@link SubFieldSchemasProperty#getStore}
             * @param store the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder store(com.aliyun.ros.cdk.core.IResolvable store) {
                this.store = store;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SubFieldSchemasProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SubFieldSchemasProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SubFieldSchemasProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SubFieldSchemasProperty {
            private final java.lang.Object fieldName;
            private final java.lang.Object fieldType;
            private final java.lang.Object analyzer;
            private final java.lang.Object enableSortAndAgg;
            private final java.lang.Object index;
            private final java.lang.Object isArray;
            private final java.lang.Object store;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.fieldName = software.amazon.jsii.Kernel.get(this, "fieldName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fieldType = software.amazon.jsii.Kernel.get(this, "fieldType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.analyzer = software.amazon.jsii.Kernel.get(this, "analyzer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableSortAndAgg = software.amazon.jsii.Kernel.get(this, "enableSortAndAgg", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.index = software.amazon.jsii.Kernel.get(this, "index", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.isArray = software.amazon.jsii.Kernel.get(this, "isArray", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.store = software.amazon.jsii.Kernel.get(this, "store", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.fieldName = java.util.Objects.requireNonNull(builder.fieldName, "fieldName is required");
                this.fieldType = java.util.Objects.requireNonNull(builder.fieldType, "fieldType is required");
                this.analyzer = builder.analyzer;
                this.enableSortAndAgg = builder.enableSortAndAgg;
                this.index = builder.index;
                this.isArray = builder.isArray;
                this.store = builder.store;
            }

            @Override
            public final java.lang.Object getFieldName() {
                return this.fieldName;
            }

            @Override
            public final java.lang.Object getFieldType() {
                return this.fieldType;
            }

            @Override
            public final java.lang.Object getAnalyzer() {
                return this.analyzer;
            }

            @Override
            public final java.lang.Object getEnableSortAndAgg() {
                return this.enableSortAndAgg;
            }

            @Override
            public final java.lang.Object getIndex() {
                return this.index;
            }

            @Override
            public final java.lang.Object getIsArray() {
                return this.isArray;
            }

            @Override
            public final java.lang.Object getStore() {
                return this.store;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("fieldName", om.valueToTree(this.getFieldName()));
                data.set("fieldType", om.valueToTree(this.getFieldType()));
                if (this.getAnalyzer() != null) {
                    data.set("analyzer", om.valueToTree(this.getAnalyzer()));
                }
                if (this.getEnableSortAndAgg() != null) {
                    data.set("enableSortAndAgg", om.valueToTree(this.getEnableSortAndAgg()));
                }
                if (this.getIndex() != null) {
                    data.set("index", om.valueToTree(this.getIndex()));
                }
                if (this.getIsArray() != null) {
                    data.set("isArray", om.valueToTree(this.getIsArray()));
                }
                if (this.getStore() != null) {
                    data.set("store", om.valueToTree(this.getStore()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ots.RosSearchIndex.SubFieldSchemasProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SubFieldSchemasProperty.Jsii$Proxy that = (SubFieldSchemasProperty.Jsii$Proxy) o;

                if (!fieldName.equals(that.fieldName)) return false;
                if (!fieldType.equals(that.fieldType)) return false;
                if (this.analyzer != null ? !this.analyzer.equals(that.analyzer) : that.analyzer != null) return false;
                if (this.enableSortAndAgg != null ? !this.enableSortAndAgg.equals(that.enableSortAndAgg) : that.enableSortAndAgg != null) return false;
                if (this.index != null ? !this.index.equals(that.index) : that.index != null) return false;
                if (this.isArray != null ? !this.isArray.equals(that.isArray) : that.isArray != null) return false;
                return this.store != null ? this.store.equals(that.store) : that.store == null;
            }

            @Override
            public final int hashCode() {
                int result = this.fieldName.hashCode();
                result = 31 * result + (this.fieldType.hashCode());
                result = 31 * result + (this.analyzer != null ? this.analyzer.hashCode() : 0);
                result = 31 * result + (this.enableSortAndAgg != null ? this.enableSortAndAgg.hashCode() : 0);
                result = 31 * result + (this.index != null ? this.index.hashCode() : 0);
                result = 31 * result + (this.isArray != null ? this.isArray.hashCode() : 0);
                result = 31 * result + (this.store != null ? this.store.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ots.RosSearchIndex}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ots.RosSearchIndex> {
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
        private final com.aliyun.ros.cdk.ots.RosSearchIndexProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ots.RosSearchIndexProps.Builder();
        }

        /**
         * @return {@code this}
         * @param fieldSchemas This parameter is required.
         */
        public Builder fieldSchemas(final com.aliyun.ros.cdk.core.IResolvable fieldSchemas) {
            this.props.fieldSchemas(fieldSchemas);
            return this;
        }
        /**
         * @return {@code this}
         * @param fieldSchemas This parameter is required.
         */
        public Builder fieldSchemas(final java.util.List<? extends java.lang.Object> fieldSchemas) {
            this.props.fieldSchemas(fieldSchemas);
            return this;
        }

        /**
         * @return {@code this}
         * @param indexName This parameter is required.
         */
        public Builder indexName(final java.lang.String indexName) {
            this.props.indexName(indexName);
            return this;
        }
        /**
         * @return {@code this}
         * @param indexName This parameter is required.
         */
        public Builder indexName(final com.aliyun.ros.cdk.core.IResolvable indexName) {
            this.props.indexName(indexName);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceName This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceName This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * @return {@code this}
         * @param tableName This parameter is required.
         */
        public Builder tableName(final java.lang.String tableName) {
            this.props.tableName(tableName);
            return this;
        }
        /**
         * @return {@code this}
         * @param tableName This parameter is required.
         */
        public Builder tableName(final com.aliyun.ros.cdk.core.IResolvable tableName) {
            this.props.tableName(tableName);
            return this;
        }

        /**
         * @return {@code this}
         * @param indexSetting This parameter is required.
         */
        public Builder indexSetting(final com.aliyun.ros.cdk.core.IResolvable indexSetting) {
            this.props.indexSetting(indexSetting);
            return this;
        }
        /**
         * @return {@code this}
         * @param indexSetting This parameter is required.
         */
        public Builder indexSetting(final com.aliyun.ros.cdk.ots.RosSearchIndex.IndexSettingProperty indexSetting) {
            this.props.indexSetting(indexSetting);
            return this;
        }

        /**
         * @return {@code this}
         * @param indexSort This parameter is required.
         */
        public Builder indexSort(final com.aliyun.ros.cdk.core.IResolvable indexSort) {
            this.props.indexSort(indexSort);
            return this;
        }
        /**
         * @return {@code this}
         * @param indexSort This parameter is required.
         */
        public Builder indexSort(final com.aliyun.ros.cdk.ots.RosSearchIndex.IndexSortProperty indexSort) {
            this.props.indexSort(indexSort);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ots.RosSearchIndex}.
         */
        @Override
        public com.aliyun.ros.cdk.ots.RosSearchIndex build() {
            return new com.aliyun.ros.cdk.ots.RosSearchIndex(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
