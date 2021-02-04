package com.aliyun.ros.cdk.dts;

/**
 * A ROS template type:  `ALIYUN::DTS::SynchronizationJob`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.468Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosSynchronizationJob")
public class RosSynchronizationJob extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSynchronizationJob(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSynchronizationJob(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.dts.RosSynchronizationJob.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::DTS::SynchronizationJob`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSynchronizationJob(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.RosSynchronizationJobProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSynchronizationJobId() {
        return software.amazon.jsii.Kernel.get(this, "attrSynchronizationJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDestinationEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "destinationEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationEndpoint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.RosSynchronizationJob.DestinationEndpointProperty value) {
        software.amazon.jsii.Kernel.set(this, "destinationEndpoint", java.util.Objects.requireNonNull(value, "destinationEndpoint is required"));
    }

    /**
     */
    public void setDestinationEndpoint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationEndpoint", java.util.Objects.requireNonNull(value, "destinationEndpoint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getDestRegion() {
        return software.amazon.jsii.Kernel.get(this, "destRegion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setDestRegion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destRegion", java.util.Objects.requireNonNull(value, "destRegion is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSourceEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "sourceEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceEndpoint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceEndpoint", java.util.Objects.requireNonNull(value, "sourceEndpoint is required"));
    }

    /**
     */
    public void setSourceEndpoint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.RosSynchronizationJob.SourceEndpointProperty value) {
        software.amazon.jsii.Kernel.set(this, "sourceEndpoint", java.util.Objects.requireNonNull(value, "sourceEndpoint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getSourceRegion() {
        return software.amazon.jsii.Kernel.get(this, "sourceRegion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSourceRegion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceRegion", java.util.Objects.requireNonNull(value, "sourceRegion is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getSynchronizationJobClass() {
        return software.amazon.jsii.Kernel.get(this, "synchronizationJobClass", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSynchronizationJobClass(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "synchronizationJobClass", java.util.Objects.requireNonNull(value, "synchronizationJobClass is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDataInitialization() {
        return software.amazon.jsii.Kernel.get(this, "dataInitialization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDataInitialization(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "dataInitialization", value);
    }

    /**
     */
    public void setDataInitialization(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dataInitialization", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getNetworkType() {
        return software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setNetworkType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "networkType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getPayType() {
        return software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setPayType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "payType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getPeriod() {
        return software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStructureInitialization() {
        return software.amazon.jsii.Kernel.get(this, "structureInitialization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStructureInitialization(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "structureInitialization", value);
    }

    /**
     */
    public void setStructureInitialization(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "structureInitialization", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSynchronizationObjects() {
        return software.amazon.jsii.Kernel.get(this, "synchronizationObjects", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSynchronizationObjects(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "synchronizationObjects", value);
    }

    /**
     */
    public void setSynchronizationObjects(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "synchronizationObjects", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getTopology() {
        return software.amazon.jsii.Kernel.get(this, "topology", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setTopology(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "topology", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getUsedTime() {
        return software.amazon.jsii.Kernel.get(this, "usedTime", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setUsedTime(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "usedTime", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosSynchronizationJob.ColumnExcludesProperty")
    @software.amazon.jsii.Jsii.Proxy(ColumnExcludesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ColumnExcludesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getColumnName() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ColumnExcludesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ColumnExcludesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ColumnExcludesProperty> {
            private java.lang.String columnName;

            /**
             * Sets the value of {@link ColumnExcludesProperty#getColumnName}
             * @param columnName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder columnName(java.lang.String columnName) {
                this.columnName = columnName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ColumnExcludesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ColumnExcludesProperty build() {
                return new Jsii$Proxy(columnName);
            }
        }

        /**
         * An implementation for {@link ColumnExcludesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ColumnExcludesProperty {
            private final java.lang.String columnName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.columnName = software.amazon.jsii.Kernel.get(this, "columnName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String columnName) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.columnName = columnName;
            }

            @Override
            public final java.lang.String getColumnName() {
                return this.columnName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getColumnName() != null) {
                    data.set("columnName", om.valueToTree(this.getColumnName()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.RosSynchronizationJob.ColumnExcludesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ColumnExcludesProperty.Jsii$Proxy that = (ColumnExcludesProperty.Jsii$Proxy) o;

                return this.columnName != null ? this.columnName.equals(that.columnName) : that.columnName == null;
            }

            @Override
            public final int hashCode() {
                int result = this.columnName != null ? this.columnName.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosSynchronizationJob.ColumnIncludesProperty")
    @software.amazon.jsii.Jsii.Proxy(ColumnIncludesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ColumnIncludesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getColumnName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getNewColumnName() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ColumnIncludesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ColumnIncludesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ColumnIncludesProperty> {
            private java.lang.String columnName;
            private java.lang.String newColumnName;

            /**
             * Sets the value of {@link ColumnIncludesProperty#getColumnName}
             * @param columnName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder columnName(java.lang.String columnName) {
                this.columnName = columnName;
                return this;
            }

            /**
             * Sets the value of {@link ColumnIncludesProperty#getNewColumnName}
             * @param newColumnName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder newColumnName(java.lang.String newColumnName) {
                this.newColumnName = newColumnName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ColumnIncludesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ColumnIncludesProperty build() {
                return new Jsii$Proxy(columnName, newColumnName);
            }
        }

        /**
         * An implementation for {@link ColumnIncludesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ColumnIncludesProperty {
            private final java.lang.String columnName;
            private final java.lang.String newColumnName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.columnName = software.amazon.jsii.Kernel.get(this, "columnName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.newColumnName = software.amazon.jsii.Kernel.get(this, "newColumnName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String columnName, final java.lang.String newColumnName) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.columnName = columnName;
                this.newColumnName = newColumnName;
            }

            @Override
            public final java.lang.String getColumnName() {
                return this.columnName;
            }

            @Override
            public final java.lang.String getNewColumnName() {
                return this.newColumnName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getColumnName() != null) {
                    data.set("columnName", om.valueToTree(this.getColumnName()));
                }
                if (this.getNewColumnName() != null) {
                    data.set("newColumnName", om.valueToTree(this.getNewColumnName()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.RosSynchronizationJob.ColumnIncludesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ColumnIncludesProperty.Jsii$Proxy that = (ColumnIncludesProperty.Jsii$Proxy) o;

                if (this.columnName != null ? !this.columnName.equals(that.columnName) : that.columnName != null) return false;
                return this.newColumnName != null ? this.newColumnName.equals(that.newColumnName) : that.newColumnName == null;
            }

            @Override
            public final int hashCode() {
                int result = this.columnName != null ? this.columnName.hashCode() : 0;
                result = 31 * result + (this.newColumnName != null ? this.newColumnName.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosSynchronizationJob.DestinationEndpointProperty")
    @software.amazon.jsii.Jsii.Proxy(DestinationEndpointProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DestinationEndpointProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getInstanceType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getInstanceId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getInstanceTypeForCreation() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getIp() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getPassword() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getUserName() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DestinationEndpointProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DestinationEndpointProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DestinationEndpointProperty> {
            private java.lang.String instanceType;
            private java.lang.String instanceId;
            private java.lang.String instanceTypeForCreation;
            private java.lang.String ip;
            private java.lang.String password;
            private java.lang.String port;
            private java.lang.String userName;

            /**
             * Sets the value of {@link DestinationEndpointProperty#getInstanceType}
             * @param instanceType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(java.lang.String instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getInstanceId}
             * @param instanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceId(java.lang.String instanceId) {
                this.instanceId = instanceId;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getInstanceTypeForCreation}
             * @param instanceTypeForCreation the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceTypeForCreation(java.lang.String instanceTypeForCreation) {
                this.instanceTypeForCreation = instanceTypeForCreation;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getIp}
             * @param ip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ip(java.lang.String ip) {
                this.ip = ip;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getPassword}
             * @param password the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(java.lang.String password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.String port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link DestinationEndpointProperty#getUserName}
             * @param userName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userName(java.lang.String userName) {
                this.userName = userName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DestinationEndpointProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DestinationEndpointProperty build() {
                return new Jsii$Proxy(instanceType, instanceId, instanceTypeForCreation, ip, password, port, userName);
            }
        }

        /**
         * An implementation for {@link DestinationEndpointProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DestinationEndpointProperty {
            private final java.lang.String instanceType;
            private final java.lang.String instanceId;
            private final java.lang.String instanceTypeForCreation;
            private final java.lang.String ip;
            private final java.lang.String password;
            private final java.lang.String port;
            private final java.lang.String userName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.instanceTypeForCreation = software.amazon.jsii.Kernel.get(this, "instanceTypeForCreation", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.ip = software.amazon.jsii.Kernel.get(this, "ip", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.userName = software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String instanceType, final java.lang.String instanceId, final java.lang.String instanceTypeForCreation, final java.lang.String ip, final java.lang.String password, final java.lang.String port, final java.lang.String userName) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.instanceType = java.util.Objects.requireNonNull(instanceType, "instanceType is required");
                this.instanceId = instanceId;
                this.instanceTypeForCreation = instanceTypeForCreation;
                this.ip = ip;
                this.password = password;
                this.port = port;
                this.userName = userName;
            }

            @Override
            public final java.lang.String getInstanceType() {
                return this.instanceType;
            }

            @Override
            public final java.lang.String getInstanceId() {
                return this.instanceId;
            }

            @Override
            public final java.lang.String getInstanceTypeForCreation() {
                return this.instanceTypeForCreation;
            }

            @Override
            public final java.lang.String getIp() {
                return this.ip;
            }

            @Override
            public final java.lang.String getPassword() {
                return this.password;
            }

            @Override
            public final java.lang.String getPort() {
                return this.port;
            }

            @Override
            public final java.lang.String getUserName() {
                return this.userName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("instanceType", om.valueToTree(this.getInstanceType()));
                if (this.getInstanceId() != null) {
                    data.set("instanceId", om.valueToTree(this.getInstanceId()));
                }
                if (this.getInstanceTypeForCreation() != null) {
                    data.set("instanceTypeForCreation", om.valueToTree(this.getInstanceTypeForCreation()));
                }
                if (this.getIp() != null) {
                    data.set("ip", om.valueToTree(this.getIp()));
                }
                if (this.getPassword() != null) {
                    data.set("password", om.valueToTree(this.getPassword()));
                }
                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }
                if (this.getUserName() != null) {
                    data.set("userName", om.valueToTree(this.getUserName()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.RosSynchronizationJob.DestinationEndpointProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DestinationEndpointProperty.Jsii$Proxy that = (DestinationEndpointProperty.Jsii$Proxy) o;

                if (!instanceType.equals(that.instanceType)) return false;
                if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
                if (this.instanceTypeForCreation != null ? !this.instanceTypeForCreation.equals(that.instanceTypeForCreation) : that.instanceTypeForCreation != null) return false;
                if (this.ip != null ? !this.ip.equals(that.ip) : that.ip != null) return false;
                if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
                if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
                return this.userName != null ? this.userName.equals(that.userName) : that.userName == null;
            }

            @Override
            public final int hashCode() {
                int result = this.instanceType.hashCode();
                result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
                result = 31 * result + (this.instanceTypeForCreation != null ? this.instanceTypeForCreation.hashCode() : 0);
                result = 31 * result + (this.ip != null ? this.ip.hashCode() : 0);
                result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
                result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
                result = 31 * result + (this.userName != null ? this.userName.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosSynchronizationJob.SourceEndpointProperty")
    @software.amazon.jsii.Jsii.Proxy(SourceEndpointProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SourceEndpointProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getInstanceType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getInstanceId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getInstanceTypeForCreation() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getIp() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getOwnerId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getPassword() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getRole() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getUserName() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SourceEndpointProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SourceEndpointProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SourceEndpointProperty> {
            private java.lang.String instanceType;
            private java.lang.String instanceId;
            private java.lang.String instanceTypeForCreation;
            private java.lang.String ip;
            private java.lang.String ownerId;
            private java.lang.String password;
            private java.lang.String port;
            private java.lang.String role;
            private java.lang.String userName;

            /**
             * Sets the value of {@link SourceEndpointProperty#getInstanceType}
             * @param instanceType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(java.lang.String instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getInstanceId}
             * @param instanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceId(java.lang.String instanceId) {
                this.instanceId = instanceId;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getInstanceTypeForCreation}
             * @param instanceTypeForCreation the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceTypeForCreation(java.lang.String instanceTypeForCreation) {
                this.instanceTypeForCreation = instanceTypeForCreation;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getIp}
             * @param ip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ip(java.lang.String ip) {
                this.ip = ip;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getOwnerId}
             * @param ownerId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ownerId(java.lang.String ownerId) {
                this.ownerId = ownerId;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getPassword}
             * @param password the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(java.lang.String password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.String port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getRole}
             * @param role the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder role(java.lang.String role) {
                this.role = role;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getUserName}
             * @param userName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userName(java.lang.String userName) {
                this.userName = userName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SourceEndpointProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SourceEndpointProperty build() {
                return new Jsii$Proxy(instanceType, instanceId, instanceTypeForCreation, ip, ownerId, password, port, role, userName);
            }
        }

        /**
         * An implementation for {@link SourceEndpointProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SourceEndpointProperty {
            private final java.lang.String instanceType;
            private final java.lang.String instanceId;
            private final java.lang.String instanceTypeForCreation;
            private final java.lang.String ip;
            private final java.lang.String ownerId;
            private final java.lang.String password;
            private final java.lang.String port;
            private final java.lang.String role;
            private final java.lang.String userName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.instanceTypeForCreation = software.amazon.jsii.Kernel.get(this, "instanceTypeForCreation", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.ip = software.amazon.jsii.Kernel.get(this, "ip", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.ownerId = software.amazon.jsii.Kernel.get(this, "ownerId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.role = software.amazon.jsii.Kernel.get(this, "role", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.userName = software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String instanceType, final java.lang.String instanceId, final java.lang.String instanceTypeForCreation, final java.lang.String ip, final java.lang.String ownerId, final java.lang.String password, final java.lang.String port, final java.lang.String role, final java.lang.String userName) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.instanceType = java.util.Objects.requireNonNull(instanceType, "instanceType is required");
                this.instanceId = instanceId;
                this.instanceTypeForCreation = instanceTypeForCreation;
                this.ip = ip;
                this.ownerId = ownerId;
                this.password = password;
                this.port = port;
                this.role = role;
                this.userName = userName;
            }

            @Override
            public final java.lang.String getInstanceType() {
                return this.instanceType;
            }

            @Override
            public final java.lang.String getInstanceId() {
                return this.instanceId;
            }

            @Override
            public final java.lang.String getInstanceTypeForCreation() {
                return this.instanceTypeForCreation;
            }

            @Override
            public final java.lang.String getIp() {
                return this.ip;
            }

            @Override
            public final java.lang.String getOwnerId() {
                return this.ownerId;
            }

            @Override
            public final java.lang.String getPassword() {
                return this.password;
            }

            @Override
            public final java.lang.String getPort() {
                return this.port;
            }

            @Override
            public final java.lang.String getRole() {
                return this.role;
            }

            @Override
            public final java.lang.String getUserName() {
                return this.userName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("instanceType", om.valueToTree(this.getInstanceType()));
                if (this.getInstanceId() != null) {
                    data.set("instanceId", om.valueToTree(this.getInstanceId()));
                }
                if (this.getInstanceTypeForCreation() != null) {
                    data.set("instanceTypeForCreation", om.valueToTree(this.getInstanceTypeForCreation()));
                }
                if (this.getIp() != null) {
                    data.set("ip", om.valueToTree(this.getIp()));
                }
                if (this.getOwnerId() != null) {
                    data.set("ownerId", om.valueToTree(this.getOwnerId()));
                }
                if (this.getPassword() != null) {
                    data.set("password", om.valueToTree(this.getPassword()));
                }
                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }
                if (this.getRole() != null) {
                    data.set("role", om.valueToTree(this.getRole()));
                }
                if (this.getUserName() != null) {
                    data.set("userName", om.valueToTree(this.getUserName()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.RosSynchronizationJob.SourceEndpointProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SourceEndpointProperty.Jsii$Proxy that = (SourceEndpointProperty.Jsii$Proxy) o;

                if (!instanceType.equals(that.instanceType)) return false;
                if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
                if (this.instanceTypeForCreation != null ? !this.instanceTypeForCreation.equals(that.instanceTypeForCreation) : that.instanceTypeForCreation != null) return false;
                if (this.ip != null ? !this.ip.equals(that.ip) : that.ip != null) return false;
                if (this.ownerId != null ? !this.ownerId.equals(that.ownerId) : that.ownerId != null) return false;
                if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
                if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
                if (this.role != null ? !this.role.equals(that.role) : that.role != null) return false;
                return this.userName != null ? this.userName.equals(that.userName) : that.userName == null;
            }

            @Override
            public final int hashCode() {
                int result = this.instanceType.hashCode();
                result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
                result = 31 * result + (this.instanceTypeForCreation != null ? this.instanceTypeForCreation.hashCode() : 0);
                result = 31 * result + (this.ip != null ? this.ip.hashCode() : 0);
                result = 31 * result + (this.ownerId != null ? this.ownerId.hashCode() : 0);
                result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
                result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
                result = 31 * result + (this.role != null ? this.role.hashCode() : 0);
                result = 31 * result + (this.userName != null ? this.userName.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosSynchronizationJob.SynchronizationObjectsProperty")
    @software.amazon.jsii.Jsii.Proxy(SynchronizationObjectsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SynchronizationObjectsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getDbName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getNewDbName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getNewSchemaName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getSchemaName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTableExcludes() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTableIncludes() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SynchronizationObjectsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SynchronizationObjectsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SynchronizationObjectsProperty> {
            private java.lang.String dbName;
            private java.lang.String newDbName;
            private java.lang.String newSchemaName;
            private java.lang.String schemaName;
            private java.lang.Object tableExcludes;
            private java.lang.Object tableIncludes;

            /**
             * Sets the value of {@link SynchronizationObjectsProperty#getDbName}
             * @param dbName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dbName(java.lang.String dbName) {
                this.dbName = dbName;
                return this;
            }

            /**
             * Sets the value of {@link SynchronizationObjectsProperty#getNewDbName}
             * @param newDbName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder newDbName(java.lang.String newDbName) {
                this.newDbName = newDbName;
                return this;
            }

            /**
             * Sets the value of {@link SynchronizationObjectsProperty#getNewSchemaName}
             * @param newSchemaName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder newSchemaName(java.lang.String newSchemaName) {
                this.newSchemaName = newSchemaName;
                return this;
            }

            /**
             * Sets the value of {@link SynchronizationObjectsProperty#getSchemaName}
             * @param schemaName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder schemaName(java.lang.String schemaName) {
                this.schemaName = schemaName;
                return this;
            }

            /**
             * Sets the value of {@link SynchronizationObjectsProperty#getTableExcludes}
             * @param tableExcludes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tableExcludes(com.aliyun.ros.cdk.core.IResolvable tableExcludes) {
                this.tableExcludes = tableExcludes;
                return this;
            }

            /**
             * Sets the value of {@link SynchronizationObjectsProperty#getTableExcludes}
             * @param tableExcludes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tableExcludes(java.util.List<? extends java.lang.Object> tableExcludes) {
                this.tableExcludes = tableExcludes;
                return this;
            }

            /**
             * Sets the value of {@link SynchronizationObjectsProperty#getTableIncludes}
             * @param tableIncludes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tableIncludes(com.aliyun.ros.cdk.core.IResolvable tableIncludes) {
                this.tableIncludes = tableIncludes;
                return this;
            }

            /**
             * Sets the value of {@link SynchronizationObjectsProperty#getTableIncludes}
             * @param tableIncludes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tableIncludes(java.util.List<? extends java.lang.Object> tableIncludes) {
                this.tableIncludes = tableIncludes;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SynchronizationObjectsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SynchronizationObjectsProperty build() {
                return new Jsii$Proxy(dbName, newDbName, newSchemaName, schemaName, tableExcludes, tableIncludes);
            }
        }

        /**
         * An implementation for {@link SynchronizationObjectsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SynchronizationObjectsProperty {
            private final java.lang.String dbName;
            private final java.lang.String newDbName;
            private final java.lang.String newSchemaName;
            private final java.lang.String schemaName;
            private final java.lang.Object tableExcludes;
            private final java.lang.Object tableIncludes;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.dbName = software.amazon.jsii.Kernel.get(this, "dbName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.newDbName = software.amazon.jsii.Kernel.get(this, "newDbName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.newSchemaName = software.amazon.jsii.Kernel.get(this, "newSchemaName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.schemaName = software.amazon.jsii.Kernel.get(this, "schemaName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.tableExcludes = software.amazon.jsii.Kernel.get(this, "tableExcludes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tableIncludes = software.amazon.jsii.Kernel.get(this, "tableIncludes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String dbName, final java.lang.String newDbName, final java.lang.String newSchemaName, final java.lang.String schemaName, final java.lang.Object tableExcludes, final java.lang.Object tableIncludes) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.dbName = dbName;
                this.newDbName = newDbName;
                this.newSchemaName = newSchemaName;
                this.schemaName = schemaName;
                this.tableExcludes = tableExcludes;
                this.tableIncludes = tableIncludes;
            }

            @Override
            public final java.lang.String getDbName() {
                return this.dbName;
            }

            @Override
            public final java.lang.String getNewDbName() {
                return this.newDbName;
            }

            @Override
            public final java.lang.String getNewSchemaName() {
                return this.newSchemaName;
            }

            @Override
            public final java.lang.String getSchemaName() {
                return this.schemaName;
            }

            @Override
            public final java.lang.Object getTableExcludes() {
                return this.tableExcludes;
            }

            @Override
            public final java.lang.Object getTableIncludes() {
                return this.tableIncludes;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getDbName() != null) {
                    data.set("dbName", om.valueToTree(this.getDbName()));
                }
                if (this.getNewDbName() != null) {
                    data.set("newDbName", om.valueToTree(this.getNewDbName()));
                }
                if (this.getNewSchemaName() != null) {
                    data.set("newSchemaName", om.valueToTree(this.getNewSchemaName()));
                }
                if (this.getSchemaName() != null) {
                    data.set("schemaName", om.valueToTree(this.getSchemaName()));
                }
                if (this.getTableExcludes() != null) {
                    data.set("tableExcludes", om.valueToTree(this.getTableExcludes()));
                }
                if (this.getTableIncludes() != null) {
                    data.set("tableIncludes", om.valueToTree(this.getTableIncludes()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.RosSynchronizationJob.SynchronizationObjectsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SynchronizationObjectsProperty.Jsii$Proxy that = (SynchronizationObjectsProperty.Jsii$Proxy) o;

                if (this.dbName != null ? !this.dbName.equals(that.dbName) : that.dbName != null) return false;
                if (this.newDbName != null ? !this.newDbName.equals(that.newDbName) : that.newDbName != null) return false;
                if (this.newSchemaName != null ? !this.newSchemaName.equals(that.newSchemaName) : that.newSchemaName != null) return false;
                if (this.schemaName != null ? !this.schemaName.equals(that.schemaName) : that.schemaName != null) return false;
                if (this.tableExcludes != null ? !this.tableExcludes.equals(that.tableExcludes) : that.tableExcludes != null) return false;
                return this.tableIncludes != null ? this.tableIncludes.equals(that.tableIncludes) : that.tableIncludes == null;
            }

            @Override
            public final int hashCode() {
                int result = this.dbName != null ? this.dbName.hashCode() : 0;
                result = 31 * result + (this.newDbName != null ? this.newDbName.hashCode() : 0);
                result = 31 * result + (this.newSchemaName != null ? this.newSchemaName.hashCode() : 0);
                result = 31 * result + (this.schemaName != null ? this.schemaName.hashCode() : 0);
                result = 31 * result + (this.tableExcludes != null ? this.tableExcludes.hashCode() : 0);
                result = 31 * result + (this.tableIncludes != null ? this.tableIncludes.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosSynchronizationJob.TableExcludesProperty")
    @software.amazon.jsii.Jsii.Proxy(TableExcludesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TableExcludesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getTableName() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TableExcludesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TableExcludesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TableExcludesProperty> {
            private java.lang.String tableName;

            /**
             * Sets the value of {@link TableExcludesProperty#getTableName}
             * @param tableName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tableName(java.lang.String tableName) {
                this.tableName = tableName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TableExcludesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TableExcludesProperty build() {
                return new Jsii$Proxy(tableName);
            }
        }

        /**
         * An implementation for {@link TableExcludesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TableExcludesProperty {
            private final java.lang.String tableName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.tableName = software.amazon.jsii.Kernel.get(this, "tableName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String tableName) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.tableName = tableName;
            }

            @Override
            public final java.lang.String getTableName() {
                return this.tableName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getTableName() != null) {
                    data.set("tableName", om.valueToTree(this.getTableName()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.RosSynchronizationJob.TableExcludesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TableExcludesProperty.Jsii$Proxy that = (TableExcludesProperty.Jsii$Proxy) o;

                return this.tableName != null ? this.tableName.equals(that.tableName) : that.tableName == null;
            }

            @Override
            public final int hashCode() {
                int result = this.tableName != null ? this.tableName.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosSynchronizationJob.TableIncludesProperty")
    @software.amazon.jsii.Jsii.Proxy(TableIncludesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TableIncludesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getColumnExcludes() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getColumnIncludes() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getFilterCondition() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getNewTableName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getTableName() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TableIncludesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TableIncludesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TableIncludesProperty> {
            private java.lang.Object columnExcludes;
            private java.lang.Object columnIncludes;
            private java.lang.String filterCondition;
            private java.lang.String newTableName;
            private java.lang.String tableName;

            /**
             * Sets the value of {@link TableIncludesProperty#getColumnExcludes}
             * @param columnExcludes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder columnExcludes(com.aliyun.ros.cdk.core.IResolvable columnExcludes) {
                this.columnExcludes = columnExcludes;
                return this;
            }

            /**
             * Sets the value of {@link TableIncludesProperty#getColumnExcludes}
             * @param columnExcludes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder columnExcludes(java.util.List<? extends java.lang.Object> columnExcludes) {
                this.columnExcludes = columnExcludes;
                return this;
            }

            /**
             * Sets the value of {@link TableIncludesProperty#getColumnIncludes}
             * @param columnIncludes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder columnIncludes(com.aliyun.ros.cdk.core.IResolvable columnIncludes) {
                this.columnIncludes = columnIncludes;
                return this;
            }

            /**
             * Sets the value of {@link TableIncludesProperty#getColumnIncludes}
             * @param columnIncludes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder columnIncludes(java.util.List<? extends java.lang.Object> columnIncludes) {
                this.columnIncludes = columnIncludes;
                return this;
            }

            /**
             * Sets the value of {@link TableIncludesProperty#getFilterCondition}
             * @param filterCondition the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder filterCondition(java.lang.String filterCondition) {
                this.filterCondition = filterCondition;
                return this;
            }

            /**
             * Sets the value of {@link TableIncludesProperty#getNewTableName}
             * @param newTableName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder newTableName(java.lang.String newTableName) {
                this.newTableName = newTableName;
                return this;
            }

            /**
             * Sets the value of {@link TableIncludesProperty#getTableName}
             * @param tableName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tableName(java.lang.String tableName) {
                this.tableName = tableName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TableIncludesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TableIncludesProperty build() {
                return new Jsii$Proxy(columnExcludes, columnIncludes, filterCondition, newTableName, tableName);
            }
        }

        /**
         * An implementation for {@link TableIncludesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TableIncludesProperty {
            private final java.lang.Object columnExcludes;
            private final java.lang.Object columnIncludes;
            private final java.lang.String filterCondition;
            private final java.lang.String newTableName;
            private final java.lang.String tableName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.columnExcludes = software.amazon.jsii.Kernel.get(this, "columnExcludes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.columnIncludes = software.amazon.jsii.Kernel.get(this, "columnIncludes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.filterCondition = software.amazon.jsii.Kernel.get(this, "filterCondition", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.newTableName = software.amazon.jsii.Kernel.get(this, "newTableName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.tableName = software.amazon.jsii.Kernel.get(this, "tableName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.Object columnExcludes, final java.lang.Object columnIncludes, final java.lang.String filterCondition, final java.lang.String newTableName, final java.lang.String tableName) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.columnExcludes = columnExcludes;
                this.columnIncludes = columnIncludes;
                this.filterCondition = filterCondition;
                this.newTableName = newTableName;
                this.tableName = tableName;
            }

            @Override
            public final java.lang.Object getColumnExcludes() {
                return this.columnExcludes;
            }

            @Override
            public final java.lang.Object getColumnIncludes() {
                return this.columnIncludes;
            }

            @Override
            public final java.lang.String getFilterCondition() {
                return this.filterCondition;
            }

            @Override
            public final java.lang.String getNewTableName() {
                return this.newTableName;
            }

            @Override
            public final java.lang.String getTableName() {
                return this.tableName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getColumnExcludes() != null) {
                    data.set("columnExcludes", om.valueToTree(this.getColumnExcludes()));
                }
                if (this.getColumnIncludes() != null) {
                    data.set("columnIncludes", om.valueToTree(this.getColumnIncludes()));
                }
                if (this.getFilterCondition() != null) {
                    data.set("filterCondition", om.valueToTree(this.getFilterCondition()));
                }
                if (this.getNewTableName() != null) {
                    data.set("newTableName", om.valueToTree(this.getNewTableName()));
                }
                if (this.getTableName() != null) {
                    data.set("tableName", om.valueToTree(this.getTableName()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.RosSynchronizationJob.TableIncludesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TableIncludesProperty.Jsii$Proxy that = (TableIncludesProperty.Jsii$Proxy) o;

                if (this.columnExcludes != null ? !this.columnExcludes.equals(that.columnExcludes) : that.columnExcludes != null) return false;
                if (this.columnIncludes != null ? !this.columnIncludes.equals(that.columnIncludes) : that.columnIncludes != null) return false;
                if (this.filterCondition != null ? !this.filterCondition.equals(that.filterCondition) : that.filterCondition != null) return false;
                if (this.newTableName != null ? !this.newTableName.equals(that.newTableName) : that.newTableName != null) return false;
                return this.tableName != null ? this.tableName.equals(that.tableName) : that.tableName == null;
            }

            @Override
            public final int hashCode() {
                int result = this.columnExcludes != null ? this.columnExcludes.hashCode() : 0;
                result = 31 * result + (this.columnIncludes != null ? this.columnIncludes.hashCode() : 0);
                result = 31 * result + (this.filterCondition != null ? this.filterCondition.hashCode() : 0);
                result = 31 * result + (this.newTableName != null ? this.newTableName.hashCode() : 0);
                result = 31 * result + (this.tableName != null ? this.tableName.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dts.RosSynchronizationJob}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dts.RosSynchronizationJob> {
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
        private final com.aliyun.ros.cdk.dts.RosSynchronizationJobProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dts.RosSynchronizationJobProps.Builder();
        }

        /**
         * @return {@code this}
         * @param destinationEndpoint This parameter is required.
         */
        public Builder destinationEndpoint(final com.aliyun.ros.cdk.dts.RosSynchronizationJob.DestinationEndpointProperty destinationEndpoint) {
            this.props.destinationEndpoint(destinationEndpoint);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationEndpoint This parameter is required.
         */
        public Builder destinationEndpoint(final com.aliyun.ros.cdk.core.IResolvable destinationEndpoint) {
            this.props.destinationEndpoint(destinationEndpoint);
            return this;
        }

        /**
         * @return {@code this}
         * @param destRegion This parameter is required.
         */
        public Builder destRegion(final java.lang.String destRegion) {
            this.props.destRegion(destRegion);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceEndpoint This parameter is required.
         */
        public Builder sourceEndpoint(final com.aliyun.ros.cdk.core.IResolvable sourceEndpoint) {
            this.props.sourceEndpoint(sourceEndpoint);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceEndpoint This parameter is required.
         */
        public Builder sourceEndpoint(final com.aliyun.ros.cdk.dts.RosSynchronizationJob.SourceEndpointProperty sourceEndpoint) {
            this.props.sourceEndpoint(sourceEndpoint);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceRegion This parameter is required.
         */
        public Builder sourceRegion(final java.lang.String sourceRegion) {
            this.props.sourceRegion(sourceRegion);
            return this;
        }

        /**
         * @return {@code this}
         * @param synchronizationJobClass This parameter is required.
         */
        public Builder synchronizationJobClass(final java.lang.String synchronizationJobClass) {
            this.props.synchronizationJobClass(synchronizationJobClass);
            return this;
        }

        /**
         * @return {@code this}
         * @param dataInitialization This parameter is required.
         */
        public Builder dataInitialization(final java.lang.Boolean dataInitialization) {
            this.props.dataInitialization(dataInitialization);
            return this;
        }
        /**
         * @return {@code this}
         * @param dataInitialization This parameter is required.
         */
        public Builder dataInitialization(final com.aliyun.ros.cdk.core.IResolvable dataInitialization) {
            this.props.dataInitialization(dataInitialization);
            return this;
        }

        /**
         * @return {@code this}
         * @param networkType This parameter is required.
         */
        public Builder networkType(final java.lang.String networkType) {
            this.props.networkType(networkType);
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
         * @param period This parameter is required.
         */
        public Builder period(final java.lang.String period) {
            this.props.period(period);
            return this;
        }

        /**
         * @return {@code this}
         * @param structureInitialization This parameter is required.
         */
        public Builder structureInitialization(final java.lang.Boolean structureInitialization) {
            this.props.structureInitialization(structureInitialization);
            return this;
        }
        /**
         * @return {@code this}
         * @param structureInitialization This parameter is required.
         */
        public Builder structureInitialization(final com.aliyun.ros.cdk.core.IResolvable structureInitialization) {
            this.props.structureInitialization(structureInitialization);
            return this;
        }

        /**
         * @return {@code this}
         * @param synchronizationObjects This parameter is required.
         */
        public Builder synchronizationObjects(final com.aliyun.ros.cdk.core.IResolvable synchronizationObjects) {
            this.props.synchronizationObjects(synchronizationObjects);
            return this;
        }
        /**
         * @return {@code this}
         * @param synchronizationObjects This parameter is required.
         */
        public Builder synchronizationObjects(final java.util.List<? extends java.lang.Object> synchronizationObjects) {
            this.props.synchronizationObjects(synchronizationObjects);
            return this;
        }

        /**
         * @return {@code this}
         * @param topology This parameter is required.
         */
        public Builder topology(final java.lang.String topology) {
            this.props.topology(topology);
            return this;
        }

        /**
         * @return {@code this}
         * @param usedTime This parameter is required.
         */
        public Builder usedTime(final java.lang.Number usedTime) {
            this.props.usedTime(usedTime);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.dts.RosSynchronizationJob}.
         */
        @Override
        public com.aliyun.ros.cdk.dts.RosSynchronizationJob build() {
            return new com.aliyun.ros.cdk.dts.RosSynchronizationJob(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
