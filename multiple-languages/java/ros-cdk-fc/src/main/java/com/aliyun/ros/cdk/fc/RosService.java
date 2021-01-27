package com.aliyun.ros.cdk.fc;

/**
 * A ROS template type:  `ALIYUN::FC::Service`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.962Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosService")
public class RosService extends com.aliyun.ros.cdk.core.RosResource {

    protected RosService(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosService(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.fc.RosService.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::FC::Service`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosService(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.RosServiceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceId() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceName() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.TagManager getTags() {
        return software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.TagManager.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getServiceName() {
        return software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setServiceName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "serviceName", java.util.Objects.requireNonNull(value, "serviceName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeletionForce(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "deletionForce", value);
    }

    /**
     */
    public void setDeletionForce(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deletionForce", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInternetAccess() {
        return software.amazon.jsii.Kernel.get(this, "internetAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInternetAccess(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "internetAccess", value);
    }

    /**
     */
    public void setInternetAccess(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "internetAccess", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLogConfig() {
        return software.amazon.jsii.Kernel.get(this, "logConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logConfig", value);
    }

    /**
     */
    public void setLogConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc.RosService.LogConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "logConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNasConfig() {
        return software.amazon.jsii.Kernel.get(this, "nasConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNasConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nasConfig", value);
    }

    /**
     */
    public void setNasConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc.RosService.NasConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "nasConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getRole() {
        return software.amazon.jsii.Kernel.get(this, "role", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setRole(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "role", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVpcConfig() {
        return software.amazon.jsii.Kernel.get(this, "vpcConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcConfig", value);
    }

    /**
     */
    public void setVpcConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc.RosService.VpcConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "vpcConfig", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosService.LogConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(LogConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface LogConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getLogstore() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getProject() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link LogConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link LogConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<LogConfigProperty> {
            private java.lang.String logstore;
            private java.lang.String project;

            /**
             * Sets the value of {@link LogConfigProperty#getLogstore}
             * @param logstore the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logstore(java.lang.String logstore) {
                this.logstore = logstore;
                return this;
            }

            /**
             * Sets the value of {@link LogConfigProperty#getProject}
             * @param project the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder project(java.lang.String project) {
                this.project = project;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link LogConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public LogConfigProperty build() {
                return new Jsii$Proxy(logstore, project);
            }
        }

        /**
         * An implementation for {@link LogConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LogConfigProperty {
            private final java.lang.String logstore;
            private final java.lang.String project;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.logstore = software.amazon.jsii.Kernel.get(this, "logstore", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.project = software.amazon.jsii.Kernel.get(this, "project", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String logstore, final java.lang.String project) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.logstore = logstore;
                this.project = project;
            }

            @Override
            public final java.lang.String getLogstore() {
                return this.logstore;
            }

            @Override
            public final java.lang.String getProject() {
                return this.project;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getLogstore() != null) {
                    data.set("logstore", om.valueToTree(this.getLogstore()));
                }
                if (this.getProject() != null) {
                    data.set("project", om.valueToTree(this.getProject()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosService.LogConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                LogConfigProperty.Jsii$Proxy that = (LogConfigProperty.Jsii$Proxy) o;

                if (this.logstore != null ? !this.logstore.equals(that.logstore) : that.logstore != null) return false;
                return this.project != null ? this.project.equals(that.project) : that.project == null;
            }

            @Override
            public final int hashCode() {
                int result = this.logstore != null ? this.logstore.hashCode() : 0;
                result = 31 * result + (this.project != null ? this.project.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosService.MountPointsProperty")
    @software.amazon.jsii.Jsii.Proxy(MountPointsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MountPointsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getMountDir();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getServerAddr();

        /**
         * @return a {@link Builder} of {@link MountPointsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MountPointsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MountPointsProperty> {
            private java.lang.String mountDir;
            private java.lang.String serverAddr;

            /**
             * Sets the value of {@link MountPointsProperty#getMountDir}
             * @param mountDir the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountDir(java.lang.String mountDir) {
                this.mountDir = mountDir;
                return this;
            }

            /**
             * Sets the value of {@link MountPointsProperty#getServerAddr}
             * @param serverAddr the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverAddr(java.lang.String serverAddr) {
                this.serverAddr = serverAddr;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MountPointsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MountPointsProperty build() {
                return new Jsii$Proxy(mountDir, serverAddr);
            }
        }

        /**
         * An implementation for {@link MountPointsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MountPointsProperty {
            private final java.lang.String mountDir;
            private final java.lang.String serverAddr;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.mountDir = software.amazon.jsii.Kernel.get(this, "mountDir", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.serverAddr = software.amazon.jsii.Kernel.get(this, "serverAddr", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String mountDir, final java.lang.String serverAddr) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.mountDir = java.util.Objects.requireNonNull(mountDir, "mountDir is required");
                this.serverAddr = java.util.Objects.requireNonNull(serverAddr, "serverAddr is required");
            }

            @Override
            public final java.lang.String getMountDir() {
                return this.mountDir;
            }

            @Override
            public final java.lang.String getServerAddr() {
                return this.serverAddr;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("mountDir", om.valueToTree(this.getMountDir()));
                data.set("serverAddr", om.valueToTree(this.getServerAddr()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosService.MountPointsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MountPointsProperty.Jsii$Proxy that = (MountPointsProperty.Jsii$Proxy) o;

                if (!mountDir.equals(that.mountDir)) return false;
                return this.serverAddr.equals(that.serverAddr);
            }

            @Override
            public final int hashCode() {
                int result = this.mountDir.hashCode();
                result = 31 * result + (this.serverAddr.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosService.NasConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(NasConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface NasConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Number getGroupId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMountPoints();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Number getUserId();

        /**
         * @return a {@link Builder} of {@link NasConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link NasConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<NasConfigProperty> {
            private java.lang.Number groupId;
            private java.lang.Object mountPoints;
            private java.lang.Number userId;

            /**
             * Sets the value of {@link NasConfigProperty#getGroupId}
             * @param groupId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder groupId(java.lang.Number groupId) {
                this.groupId = groupId;
                return this;
            }

            /**
             * Sets the value of {@link NasConfigProperty#getMountPoints}
             * @param mountPoints the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPoints(com.aliyun.ros.cdk.core.IResolvable mountPoints) {
                this.mountPoints = mountPoints;
                return this;
            }

            /**
             * Sets the value of {@link NasConfigProperty#getMountPoints}
             * @param mountPoints the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPoints(java.util.List<? extends java.lang.Object> mountPoints) {
                this.mountPoints = mountPoints;
                return this;
            }

            /**
             * Sets the value of {@link NasConfigProperty#getUserId}
             * @param userId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userId(java.lang.Number userId) {
                this.userId = userId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link NasConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public NasConfigProperty build() {
                return new Jsii$Proxy(groupId, mountPoints, userId);
            }
        }

        /**
         * An implementation for {@link NasConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NasConfigProperty {
            private final java.lang.Number groupId;
            private final java.lang.Object mountPoints;
            private final java.lang.Number userId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.mountPoints = software.amazon.jsii.Kernel.get(this, "mountPoints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.userId = software.amazon.jsii.Kernel.get(this, "userId", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.Number groupId, final java.lang.Object mountPoints, final java.lang.Number userId) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.groupId = java.util.Objects.requireNonNull(groupId, "groupId is required");
                this.mountPoints = java.util.Objects.requireNonNull(mountPoints, "mountPoints is required");
                this.userId = java.util.Objects.requireNonNull(userId, "userId is required");
            }

            @Override
            public final java.lang.Number getGroupId() {
                return this.groupId;
            }

            @Override
            public final java.lang.Object getMountPoints() {
                return this.mountPoints;
            }

            @Override
            public final java.lang.Number getUserId() {
                return this.userId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("groupId", om.valueToTree(this.getGroupId()));
                data.set("mountPoints", om.valueToTree(this.getMountPoints()));
                data.set("userId", om.valueToTree(this.getUserId()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosService.NasConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                NasConfigProperty.Jsii$Proxy that = (NasConfigProperty.Jsii$Proxy) o;

                if (!groupId.equals(that.groupId)) return false;
                if (!mountPoints.equals(that.mountPoints)) return false;
                return this.userId.equals(that.userId);
            }

            @Override
            public final int hashCode() {
                int result = this.groupId.hashCode();
                result = 31 * result + (this.mountPoints.hashCode());
                result = 31 * result + (this.userId.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosService.VpcConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(VpcConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface VpcConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getSecurityGroupId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getVpcId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchIds();

        /**
         * @return a {@link Builder} of {@link VpcConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link VpcConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<VpcConfigProperty> {
            private java.lang.String securityGroupId;
            private java.lang.String vpcId;
            private java.lang.Object vSwitchIds;

            /**
             * Sets the value of {@link VpcConfigProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(java.lang.String securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link VpcConfigProperty#getVpcId}
             * @param vpcId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(java.lang.String vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link VpcConfigProperty#getVSwitchIds}
             * @param vSwitchIds the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchIds(java.util.List<? extends java.lang.Object> vSwitchIds) {
                this.vSwitchIds = vSwitchIds;
                return this;
            }

            /**
             * Sets the value of {@link VpcConfigProperty#getVSwitchIds}
             * @param vSwitchIds the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchIds(com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
                this.vSwitchIds = vSwitchIds;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link VpcConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public VpcConfigProperty build() {
                return new Jsii$Proxy(securityGroupId, vpcId, vSwitchIds);
            }
        }

        /**
         * An implementation for {@link VpcConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpcConfigProperty {
            private final java.lang.String securityGroupId;
            private final java.lang.String vpcId;
            private final java.lang.Object vSwitchIds;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.vSwitchIds = software.amazon.jsii.Kernel.get(this, "vSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String securityGroupId, final java.lang.String vpcId, final java.lang.Object vSwitchIds) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.securityGroupId = java.util.Objects.requireNonNull(securityGroupId, "securityGroupId is required");
                this.vpcId = java.util.Objects.requireNonNull(vpcId, "vpcId is required");
                this.vSwitchIds = java.util.Objects.requireNonNull(vSwitchIds, "vSwitchIds is required");
            }

            @Override
            public final java.lang.String getSecurityGroupId() {
                return this.securityGroupId;
            }

            @Override
            public final java.lang.String getVpcId() {
                return this.vpcId;
            }

            @Override
            public final java.lang.Object getVSwitchIds() {
                return this.vSwitchIds;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
                data.set("vpcId", om.valueToTree(this.getVpcId()));
                data.set("vSwitchIds", om.valueToTree(this.getVSwitchIds()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosService.VpcConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                VpcConfigProperty.Jsii$Proxy that = (VpcConfigProperty.Jsii$Proxy) o;

                if (!securityGroupId.equals(that.securityGroupId)) return false;
                if (!vpcId.equals(that.vpcId)) return false;
                return this.vSwitchIds.equals(that.vSwitchIds);
            }

            @Override
            public final int hashCode() {
                int result = this.securityGroupId.hashCode();
                result = 31 * result + (this.vpcId.hashCode());
                result = 31 * result + (this.vSwitchIds.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.fc.RosService}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc.RosService> {
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
        private final com.aliyun.ros.cdk.fc.RosServiceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc.RosServiceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param serviceName This parameter is required.
         */
        public Builder serviceName(final java.lang.String serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }

        /**
         * @return {@code this}
         * @param deletionForce This parameter is required.
         */
        public Builder deletionForce(final java.lang.Boolean deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }
        /**
         * @return {@code this}
         * @param deletionForce This parameter is required.
         */
        public Builder deletionForce(final com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.props.deletionForce(deletionForce);
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
         * @param internetAccess This parameter is required.
         */
        public Builder internetAccess(final java.lang.Boolean internetAccess) {
            this.props.internetAccess(internetAccess);
            return this;
        }
        /**
         * @return {@code this}
         * @param internetAccess This parameter is required.
         */
        public Builder internetAccess(final com.aliyun.ros.cdk.core.IResolvable internetAccess) {
            this.props.internetAccess(internetAccess);
            return this;
        }

        /**
         * @return {@code this}
         * @param logConfig This parameter is required.
         */
        public Builder logConfig(final com.aliyun.ros.cdk.core.IResolvable logConfig) {
            this.props.logConfig(logConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param logConfig This parameter is required.
         */
        public Builder logConfig(final com.aliyun.ros.cdk.fc.RosService.LogConfigProperty logConfig) {
            this.props.logConfig(logConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param nasConfig This parameter is required.
         */
        public Builder nasConfig(final com.aliyun.ros.cdk.core.IResolvable nasConfig) {
            this.props.nasConfig(nasConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param nasConfig This parameter is required.
         */
        public Builder nasConfig(final com.aliyun.ros.cdk.fc.RosService.NasConfigProperty nasConfig) {
            this.props.nasConfig(nasConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param role This parameter is required.
         */
        public Builder role(final java.lang.String role) {
            this.props.role(role);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.core.RosTag> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcConfig This parameter is required.
         */
        public Builder vpcConfig(final com.aliyun.ros.cdk.core.IResolvable vpcConfig) {
            this.props.vpcConfig(vpcConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcConfig This parameter is required.
         */
        public Builder vpcConfig(final com.aliyun.ros.cdk.fc.RosService.VpcConfigProperty vpcConfig) {
            this.props.vpcConfig(vpcConfig);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.fc.RosService}.
         */
        @Override
        public com.aliyun.ros.cdk.fc.RosService build() {
            return new com.aliyun.ros.cdk.fc.RosService(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
