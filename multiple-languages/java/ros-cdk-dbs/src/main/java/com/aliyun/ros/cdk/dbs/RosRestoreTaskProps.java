package com.aliyun.ros.cdk.dbs;

/**
 * Properties for defining a `ALIYUN::DBS::RestoreTask`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.402Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dbs.$Module.class, fqn = "@alicloud/ros-cdk-dbs.RosRestoreTaskProps")
@software.amazon.jsii.Jsii.Proxy(RosRestoreTaskProps.Jsii$Proxy.class)
public interface RosRestoreTaskProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getBackupPlanId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDestinationEndpointInstanceType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRestoreTaskName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getBackupGatewayId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getBackupSetId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDestinationEndpointDatabaseName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDestinationEndpointInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDestinationEndpointIp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDestinationEndpointOracleSid() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDestinationEndpointPassword() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getDestinationEndpointPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDestinationEndpointRegion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDestinationEndpointUserName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDuplicateConflict() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRestoreDir() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRestoreHome() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRestoreObjects() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getRestoreTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStartTask() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosRestoreTaskProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosRestoreTaskProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosRestoreTaskProps> {
        private java.lang.String backupPlanId;
        private java.lang.String destinationEndpointInstanceType;
        private java.lang.String restoreTaskName;
        private java.lang.Number backupGatewayId;
        private java.lang.String backupSetId;
        private java.lang.String destinationEndpointDatabaseName;
        private java.lang.String destinationEndpointInstanceId;
        private java.lang.String destinationEndpointIp;
        private java.lang.String destinationEndpointOracleSid;
        private java.lang.String destinationEndpointPassword;
        private java.lang.Number destinationEndpointPort;
        private java.lang.String destinationEndpointRegion;
        private java.lang.String destinationEndpointUserName;
        private java.lang.String duplicateConflict;
        private java.lang.String restoreDir;
        private java.lang.String restoreHome;
        private java.lang.String restoreObjects;
        private java.lang.Number restoreTime;
        private java.lang.Object startTask;

        /**
         * Sets the value of {@link RosRestoreTaskProps#getBackupPlanId}
         * @param backupPlanId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder backupPlanId(java.lang.String backupPlanId) {
            this.backupPlanId = backupPlanId;
            return this;
        }

        /**
         * Sets the value of {@link RosRestoreTaskProps#getDestinationEndpointInstanceType}
         * @param destinationEndpointInstanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationEndpointInstanceType(java.lang.String destinationEndpointInstanceType) {
            this.destinationEndpointInstanceType = destinationEndpointInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosRestoreTaskProps#getRestoreTaskName}
         * @param restoreTaskName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder restoreTaskName(java.lang.String restoreTaskName) {
            this.restoreTaskName = restoreTaskName;
            return this;
        }

        /**
         * Sets the value of {@link RosRestoreTaskProps#getBackupGatewayId}
         * @param backupGatewayId the value to be set.
         * @return {@code this}
         */
        public Builder backupGatewayId(java.lang.Number backupGatewayId) {
            this.backupGatewayId = backupGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosRestoreTaskProps#getBackupSetId}
         * @param backupSetId the value to be set.
         * @return {@code this}
         */
        public Builder backupSetId(java.lang.String backupSetId) {
            this.backupSetId = backupSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosRestoreTaskProps#getDestinationEndpointDatabaseName}
         * @param destinationEndpointDatabaseName the value to be set.
         * @return {@code this}
         */
        public Builder destinationEndpointDatabaseName(java.lang.String destinationEndpointDatabaseName) {
            this.destinationEndpointDatabaseName = destinationEndpointDatabaseName;
            return this;
        }

        /**
         * Sets the value of {@link RosRestoreTaskProps#getDestinationEndpointInstanceId}
         * @param destinationEndpointInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder destinationEndpointInstanceId(java.lang.String destinationEndpointInstanceId) {
            this.destinationEndpointInstanceId = destinationEndpointInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosRestoreTaskProps#getDestinationEndpointIp}
         * @param destinationEndpointIp the value to be set.
         * @return {@code this}
         */
        public Builder destinationEndpointIp(java.lang.String destinationEndpointIp) {
            this.destinationEndpointIp = destinationEndpointIp;
            return this;
        }

        /**
         * Sets the value of {@link RosRestoreTaskProps#getDestinationEndpointOracleSid}
         * @param destinationEndpointOracleSid the value to be set.
         * @return {@code this}
         */
        public Builder destinationEndpointOracleSid(java.lang.String destinationEndpointOracleSid) {
            this.destinationEndpointOracleSid = destinationEndpointOracleSid;
            return this;
        }

        /**
         * Sets the value of {@link RosRestoreTaskProps#getDestinationEndpointPassword}
         * @param destinationEndpointPassword the value to be set.
         * @return {@code this}
         */
        public Builder destinationEndpointPassword(java.lang.String destinationEndpointPassword) {
            this.destinationEndpointPassword = destinationEndpointPassword;
            return this;
        }

        /**
         * Sets the value of {@link RosRestoreTaskProps#getDestinationEndpointPort}
         * @param destinationEndpointPort the value to be set.
         * @return {@code this}
         */
        public Builder destinationEndpointPort(java.lang.Number destinationEndpointPort) {
            this.destinationEndpointPort = destinationEndpointPort;
            return this;
        }

        /**
         * Sets the value of {@link RosRestoreTaskProps#getDestinationEndpointRegion}
         * @param destinationEndpointRegion the value to be set.
         * @return {@code this}
         */
        public Builder destinationEndpointRegion(java.lang.String destinationEndpointRegion) {
            this.destinationEndpointRegion = destinationEndpointRegion;
            return this;
        }

        /**
         * Sets the value of {@link RosRestoreTaskProps#getDestinationEndpointUserName}
         * @param destinationEndpointUserName the value to be set.
         * @return {@code this}
         */
        public Builder destinationEndpointUserName(java.lang.String destinationEndpointUserName) {
            this.destinationEndpointUserName = destinationEndpointUserName;
            return this;
        }

        /**
         * Sets the value of {@link RosRestoreTaskProps#getDuplicateConflict}
         * @param duplicateConflict the value to be set.
         * @return {@code this}
         */
        public Builder duplicateConflict(java.lang.String duplicateConflict) {
            this.duplicateConflict = duplicateConflict;
            return this;
        }

        /**
         * Sets the value of {@link RosRestoreTaskProps#getRestoreDir}
         * @param restoreDir the value to be set.
         * @return {@code this}
         */
        public Builder restoreDir(java.lang.String restoreDir) {
            this.restoreDir = restoreDir;
            return this;
        }

        /**
         * Sets the value of {@link RosRestoreTaskProps#getRestoreHome}
         * @param restoreHome the value to be set.
         * @return {@code this}
         */
        public Builder restoreHome(java.lang.String restoreHome) {
            this.restoreHome = restoreHome;
            return this;
        }

        /**
         * Sets the value of {@link RosRestoreTaskProps#getRestoreObjects}
         * @param restoreObjects the value to be set.
         * @return {@code this}
         */
        public Builder restoreObjects(java.lang.String restoreObjects) {
            this.restoreObjects = restoreObjects;
            return this;
        }

        /**
         * Sets the value of {@link RosRestoreTaskProps#getRestoreTime}
         * @param restoreTime the value to be set.
         * @return {@code this}
         */
        public Builder restoreTime(java.lang.Number restoreTime) {
            this.restoreTime = restoreTime;
            return this;
        }

        /**
         * Sets the value of {@link RosRestoreTaskProps#getStartTask}
         * @param startTask the value to be set.
         * @return {@code this}
         */
        public Builder startTask(java.lang.Boolean startTask) {
            this.startTask = startTask;
            return this;
        }

        /**
         * Sets the value of {@link RosRestoreTaskProps#getStartTask}
         * @param startTask the value to be set.
         * @return {@code this}
         */
        public Builder startTask(com.aliyun.ros.cdk.core.IResolvable startTask) {
            this.startTask = startTask;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosRestoreTaskProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosRestoreTaskProps build() {
            return new Jsii$Proxy(backupPlanId, destinationEndpointInstanceType, restoreTaskName, backupGatewayId, backupSetId, destinationEndpointDatabaseName, destinationEndpointInstanceId, destinationEndpointIp, destinationEndpointOracleSid, destinationEndpointPassword, destinationEndpointPort, destinationEndpointRegion, destinationEndpointUserName, duplicateConflict, restoreDir, restoreHome, restoreObjects, restoreTime, startTask);
        }
    }

    /**
     * An implementation for {@link RosRestoreTaskProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosRestoreTaskProps {
        private final java.lang.String backupPlanId;
        private final java.lang.String destinationEndpointInstanceType;
        private final java.lang.String restoreTaskName;
        private final java.lang.Number backupGatewayId;
        private final java.lang.String backupSetId;
        private final java.lang.String destinationEndpointDatabaseName;
        private final java.lang.String destinationEndpointInstanceId;
        private final java.lang.String destinationEndpointIp;
        private final java.lang.String destinationEndpointOracleSid;
        private final java.lang.String destinationEndpointPassword;
        private final java.lang.Number destinationEndpointPort;
        private final java.lang.String destinationEndpointRegion;
        private final java.lang.String destinationEndpointUserName;
        private final java.lang.String duplicateConflict;
        private final java.lang.String restoreDir;
        private final java.lang.String restoreHome;
        private final java.lang.String restoreObjects;
        private final java.lang.Number restoreTime;
        private final java.lang.Object startTask;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.backupPlanId = software.amazon.jsii.Kernel.get(this, "backupPlanId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.destinationEndpointInstanceType = software.amazon.jsii.Kernel.get(this, "destinationEndpointInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.restoreTaskName = software.amazon.jsii.Kernel.get(this, "restoreTaskName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.backupGatewayId = software.amazon.jsii.Kernel.get(this, "backupGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.backupSetId = software.amazon.jsii.Kernel.get(this, "backupSetId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.destinationEndpointDatabaseName = software.amazon.jsii.Kernel.get(this, "destinationEndpointDatabaseName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.destinationEndpointInstanceId = software.amazon.jsii.Kernel.get(this, "destinationEndpointInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.destinationEndpointIp = software.amazon.jsii.Kernel.get(this, "destinationEndpointIp", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.destinationEndpointOracleSid = software.amazon.jsii.Kernel.get(this, "destinationEndpointOracleSid", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.destinationEndpointPassword = software.amazon.jsii.Kernel.get(this, "destinationEndpointPassword", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.destinationEndpointPort = software.amazon.jsii.Kernel.get(this, "destinationEndpointPort", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.destinationEndpointRegion = software.amazon.jsii.Kernel.get(this, "destinationEndpointRegion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.destinationEndpointUserName = software.amazon.jsii.Kernel.get(this, "destinationEndpointUserName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.duplicateConflict = software.amazon.jsii.Kernel.get(this, "duplicateConflict", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.restoreDir = software.amazon.jsii.Kernel.get(this, "restoreDir", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.restoreHome = software.amazon.jsii.Kernel.get(this, "restoreHome", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.restoreObjects = software.amazon.jsii.Kernel.get(this, "restoreObjects", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.restoreTime = software.amazon.jsii.Kernel.get(this, "restoreTime", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.startTask = software.amazon.jsii.Kernel.get(this, "startTask", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String backupPlanId, final java.lang.String destinationEndpointInstanceType, final java.lang.String restoreTaskName, final java.lang.Number backupGatewayId, final java.lang.String backupSetId, final java.lang.String destinationEndpointDatabaseName, final java.lang.String destinationEndpointInstanceId, final java.lang.String destinationEndpointIp, final java.lang.String destinationEndpointOracleSid, final java.lang.String destinationEndpointPassword, final java.lang.Number destinationEndpointPort, final java.lang.String destinationEndpointRegion, final java.lang.String destinationEndpointUserName, final java.lang.String duplicateConflict, final java.lang.String restoreDir, final java.lang.String restoreHome, final java.lang.String restoreObjects, final java.lang.Number restoreTime, final java.lang.Object startTask) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.backupPlanId = java.util.Objects.requireNonNull(backupPlanId, "backupPlanId is required");
            this.destinationEndpointInstanceType = java.util.Objects.requireNonNull(destinationEndpointInstanceType, "destinationEndpointInstanceType is required");
            this.restoreTaskName = java.util.Objects.requireNonNull(restoreTaskName, "restoreTaskName is required");
            this.backupGatewayId = backupGatewayId;
            this.backupSetId = backupSetId;
            this.destinationEndpointDatabaseName = destinationEndpointDatabaseName;
            this.destinationEndpointInstanceId = destinationEndpointInstanceId;
            this.destinationEndpointIp = destinationEndpointIp;
            this.destinationEndpointOracleSid = destinationEndpointOracleSid;
            this.destinationEndpointPassword = destinationEndpointPassword;
            this.destinationEndpointPort = destinationEndpointPort;
            this.destinationEndpointRegion = destinationEndpointRegion;
            this.destinationEndpointUserName = destinationEndpointUserName;
            this.duplicateConflict = duplicateConflict;
            this.restoreDir = restoreDir;
            this.restoreHome = restoreHome;
            this.restoreObjects = restoreObjects;
            this.restoreTime = restoreTime;
            this.startTask = startTask;
        }

        @Override
        public final java.lang.String getBackupPlanId() {
            return this.backupPlanId;
        }

        @Override
        public final java.lang.String getDestinationEndpointInstanceType() {
            return this.destinationEndpointInstanceType;
        }

        @Override
        public final java.lang.String getRestoreTaskName() {
            return this.restoreTaskName;
        }

        @Override
        public final java.lang.Number getBackupGatewayId() {
            return this.backupGatewayId;
        }

        @Override
        public final java.lang.String getBackupSetId() {
            return this.backupSetId;
        }

        @Override
        public final java.lang.String getDestinationEndpointDatabaseName() {
            return this.destinationEndpointDatabaseName;
        }

        @Override
        public final java.lang.String getDestinationEndpointInstanceId() {
            return this.destinationEndpointInstanceId;
        }

        @Override
        public final java.lang.String getDestinationEndpointIp() {
            return this.destinationEndpointIp;
        }

        @Override
        public final java.lang.String getDestinationEndpointOracleSid() {
            return this.destinationEndpointOracleSid;
        }

        @Override
        public final java.lang.String getDestinationEndpointPassword() {
            return this.destinationEndpointPassword;
        }

        @Override
        public final java.lang.Number getDestinationEndpointPort() {
            return this.destinationEndpointPort;
        }

        @Override
        public final java.lang.String getDestinationEndpointRegion() {
            return this.destinationEndpointRegion;
        }

        @Override
        public final java.lang.String getDestinationEndpointUserName() {
            return this.destinationEndpointUserName;
        }

        @Override
        public final java.lang.String getDuplicateConflict() {
            return this.duplicateConflict;
        }

        @Override
        public final java.lang.String getRestoreDir() {
            return this.restoreDir;
        }

        @Override
        public final java.lang.String getRestoreHome() {
            return this.restoreHome;
        }

        @Override
        public final java.lang.String getRestoreObjects() {
            return this.restoreObjects;
        }

        @Override
        public final java.lang.Number getRestoreTime() {
            return this.restoreTime;
        }

        @Override
        public final java.lang.Object getStartTask() {
            return this.startTask;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("backupPlanId", om.valueToTree(this.getBackupPlanId()));
            data.set("destinationEndpointInstanceType", om.valueToTree(this.getDestinationEndpointInstanceType()));
            data.set("restoreTaskName", om.valueToTree(this.getRestoreTaskName()));
            if (this.getBackupGatewayId() != null) {
                data.set("backupGatewayId", om.valueToTree(this.getBackupGatewayId()));
            }
            if (this.getBackupSetId() != null) {
                data.set("backupSetId", om.valueToTree(this.getBackupSetId()));
            }
            if (this.getDestinationEndpointDatabaseName() != null) {
                data.set("destinationEndpointDatabaseName", om.valueToTree(this.getDestinationEndpointDatabaseName()));
            }
            if (this.getDestinationEndpointInstanceId() != null) {
                data.set("destinationEndpointInstanceId", om.valueToTree(this.getDestinationEndpointInstanceId()));
            }
            if (this.getDestinationEndpointIp() != null) {
                data.set("destinationEndpointIp", om.valueToTree(this.getDestinationEndpointIp()));
            }
            if (this.getDestinationEndpointOracleSid() != null) {
                data.set("destinationEndpointOracleSid", om.valueToTree(this.getDestinationEndpointOracleSid()));
            }
            if (this.getDestinationEndpointPassword() != null) {
                data.set("destinationEndpointPassword", om.valueToTree(this.getDestinationEndpointPassword()));
            }
            if (this.getDestinationEndpointPort() != null) {
                data.set("destinationEndpointPort", om.valueToTree(this.getDestinationEndpointPort()));
            }
            if (this.getDestinationEndpointRegion() != null) {
                data.set("destinationEndpointRegion", om.valueToTree(this.getDestinationEndpointRegion()));
            }
            if (this.getDestinationEndpointUserName() != null) {
                data.set("destinationEndpointUserName", om.valueToTree(this.getDestinationEndpointUserName()));
            }
            if (this.getDuplicateConflict() != null) {
                data.set("duplicateConflict", om.valueToTree(this.getDuplicateConflict()));
            }
            if (this.getRestoreDir() != null) {
                data.set("restoreDir", om.valueToTree(this.getRestoreDir()));
            }
            if (this.getRestoreHome() != null) {
                data.set("restoreHome", om.valueToTree(this.getRestoreHome()));
            }
            if (this.getRestoreObjects() != null) {
                data.set("restoreObjects", om.valueToTree(this.getRestoreObjects()));
            }
            if (this.getRestoreTime() != null) {
                data.set("restoreTime", om.valueToTree(this.getRestoreTime()));
            }
            if (this.getStartTask() != null) {
                data.set("startTask", om.valueToTree(this.getStartTask()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dbs.RosRestoreTaskProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosRestoreTaskProps.Jsii$Proxy that = (RosRestoreTaskProps.Jsii$Proxy) o;

            if (!backupPlanId.equals(that.backupPlanId)) return false;
            if (!destinationEndpointInstanceType.equals(that.destinationEndpointInstanceType)) return false;
            if (!restoreTaskName.equals(that.restoreTaskName)) return false;
            if (this.backupGatewayId != null ? !this.backupGatewayId.equals(that.backupGatewayId) : that.backupGatewayId != null) return false;
            if (this.backupSetId != null ? !this.backupSetId.equals(that.backupSetId) : that.backupSetId != null) return false;
            if (this.destinationEndpointDatabaseName != null ? !this.destinationEndpointDatabaseName.equals(that.destinationEndpointDatabaseName) : that.destinationEndpointDatabaseName != null) return false;
            if (this.destinationEndpointInstanceId != null ? !this.destinationEndpointInstanceId.equals(that.destinationEndpointInstanceId) : that.destinationEndpointInstanceId != null) return false;
            if (this.destinationEndpointIp != null ? !this.destinationEndpointIp.equals(that.destinationEndpointIp) : that.destinationEndpointIp != null) return false;
            if (this.destinationEndpointOracleSid != null ? !this.destinationEndpointOracleSid.equals(that.destinationEndpointOracleSid) : that.destinationEndpointOracleSid != null) return false;
            if (this.destinationEndpointPassword != null ? !this.destinationEndpointPassword.equals(that.destinationEndpointPassword) : that.destinationEndpointPassword != null) return false;
            if (this.destinationEndpointPort != null ? !this.destinationEndpointPort.equals(that.destinationEndpointPort) : that.destinationEndpointPort != null) return false;
            if (this.destinationEndpointRegion != null ? !this.destinationEndpointRegion.equals(that.destinationEndpointRegion) : that.destinationEndpointRegion != null) return false;
            if (this.destinationEndpointUserName != null ? !this.destinationEndpointUserName.equals(that.destinationEndpointUserName) : that.destinationEndpointUserName != null) return false;
            if (this.duplicateConflict != null ? !this.duplicateConflict.equals(that.duplicateConflict) : that.duplicateConflict != null) return false;
            if (this.restoreDir != null ? !this.restoreDir.equals(that.restoreDir) : that.restoreDir != null) return false;
            if (this.restoreHome != null ? !this.restoreHome.equals(that.restoreHome) : that.restoreHome != null) return false;
            if (this.restoreObjects != null ? !this.restoreObjects.equals(that.restoreObjects) : that.restoreObjects != null) return false;
            if (this.restoreTime != null ? !this.restoreTime.equals(that.restoreTime) : that.restoreTime != null) return false;
            return this.startTask != null ? this.startTask.equals(that.startTask) : that.startTask == null;
        }

        @Override
        public final int hashCode() {
            int result = this.backupPlanId.hashCode();
            result = 31 * result + (this.destinationEndpointInstanceType.hashCode());
            result = 31 * result + (this.restoreTaskName.hashCode());
            result = 31 * result + (this.backupGatewayId != null ? this.backupGatewayId.hashCode() : 0);
            result = 31 * result + (this.backupSetId != null ? this.backupSetId.hashCode() : 0);
            result = 31 * result + (this.destinationEndpointDatabaseName != null ? this.destinationEndpointDatabaseName.hashCode() : 0);
            result = 31 * result + (this.destinationEndpointInstanceId != null ? this.destinationEndpointInstanceId.hashCode() : 0);
            result = 31 * result + (this.destinationEndpointIp != null ? this.destinationEndpointIp.hashCode() : 0);
            result = 31 * result + (this.destinationEndpointOracleSid != null ? this.destinationEndpointOracleSid.hashCode() : 0);
            result = 31 * result + (this.destinationEndpointPassword != null ? this.destinationEndpointPassword.hashCode() : 0);
            result = 31 * result + (this.destinationEndpointPort != null ? this.destinationEndpointPort.hashCode() : 0);
            result = 31 * result + (this.destinationEndpointRegion != null ? this.destinationEndpointRegion.hashCode() : 0);
            result = 31 * result + (this.destinationEndpointUserName != null ? this.destinationEndpointUserName.hashCode() : 0);
            result = 31 * result + (this.duplicateConflict != null ? this.duplicateConflict.hashCode() : 0);
            result = 31 * result + (this.restoreDir != null ? this.restoreDir.hashCode() : 0);
            result = 31 * result + (this.restoreHome != null ? this.restoreHome.hashCode() : 0);
            result = 31 * result + (this.restoreObjects != null ? this.restoreObjects.hashCode() : 0);
            result = 31 * result + (this.restoreTime != null ? this.restoreTime.hashCode() : 0);
            result = 31 * result + (this.startTask != null ? this.startTask.hashCode() : 0);
            return result;
        }
    }
}
